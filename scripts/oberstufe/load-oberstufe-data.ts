import { SCHOOL_DAYS } from "@/lib/constants"
import { readJsonFile, readTextFile, writeJsonFileData } from "../script-utils"

function createKurslistenJson() {
  const kursliste: Kursliste = {}
  const text = readTextFile("scripts/oberstufe/Kurslisten.txt")
  const kurse = text.split("\n\n")
  for (const kurs of kurse) {
    const lines = kurs.split("\n")
    kursliste[lines[0]] = lines
      .slice(1)
      .map((teilnehmer) => teilnehmer.substring(2).trim())
  }
  writeJsonFileData("oberstufe/Kursliste.json", kursliste)
}

function createStundenplanJson() {
  const columns = <string[][]>[]
  const raw = readJsonFile("scripts/oberstufe/Raw_Stundenplan.json")
  const rawColumns = raw[0]["data"]["Tables"]
  for (let i = 0; i < rawColumns.length; i++) {
    const rows = <string[]>[]
    const column = rawColumns[i]
    for (const day of SCHOOL_DAYS) {
      const faecher = column[day]["value"] as string
      rows.push(faecher.replace(/[\.\*]/g, ""))
    }
    columns.push(rows)
  }

  //this is needed because the used OCR tool misses some columns, duplicate them here (may not always work)
  columns.splice(2, 0, columns[2])
  columns.splice(4, 0, columns[4])

  writeJsonFileData("oberstufe/Stundenplan.json", columns)
  validateStundenplanFromOtherFilesJson()
}

//for this to work, Kursliste.json and Lehrerliste.json must be present already (and it should be manually approved that they don't contain errors)
function validateStundenplanFromOtherFilesJson() {
  const kursliste = readJsonFile(
    "src/app/data/oberstufe/Kursliste.json",
  ) as Kursliste
  const stundenplanGesamt = readJsonFile(
    "src/app/data/oberstufe/Stundenplan.json",
  ) as string[][]
  const lehrerliste = readJsonFile(
    "src/app/data/Lehrerliste.json",
  ) as StringStringMap

  const alleKurse: Array<string> = []
  for (const entry in kursliste) {
    alleKurse.push(entry)
  }

  for (const row of stundenplanGesamt) {
    for (const entry of row) {
      const words = entry.split(" ")
      if (words.length == 1) {
        continue
      }
      if (words.length % 3 != 0) {
        console.log(
          `Zeile ${entry} hat nicht die korrekte Anzahl an Elementen.`,
        )
        continue
      }
      for (let i = 0; i < words.length; i += 3) {
        const rawFach = words[i]
        if (!rawFach.includes("/")) {
          const lehrerkuerzel = words[i + 1]
          const kurs = alleKurse.find(
            (kurs) =>
              kurs.split(" ")[0].startsWith(rawFach) &&
              kurs.split(" ")[1].slice(1, -1) == lehrerkuerzel,
          )
          if (!(lehrerkuerzel in lehrerliste)) {
            console.log(
              `Lehrer mit Kürzel ${lehrerkuerzel} konnte nicht gefunden werden.`,
            )
          }
          if (!kurs) {
            console.log(
              `Kurs mit Kürzel ${words[i]} (${lehrerkuerzel}) konnte nicht gefunden werden`,
            )
            continue
          }
        } else if (rawFach) {
          // TODO implement W-Seminare
        }
      }
    }
  }
}

// createKurslistenJson()
// createStundenplanJson()
validateStundenplanFromOtherFilesJson()
