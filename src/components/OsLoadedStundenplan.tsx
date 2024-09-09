import { readJsonFile } from "@/lib/server-utils"
import RenderedStundenplan from "./RenderedStundenplan"
import { FACH_KUERZEL } from "@/lib/constants"
import { Suspense } from "react"

async function loadOsStundenplan(name: string): Promise<Stundenplan | null> {
  const kursliste = (await readJsonFile(
    "oberstufe/Kursliste.json",
  )) as Kursliste
  const schuelerKurse: Array<string> = []
  for (const entry in kursliste) {
    // TODO
    if (kursliste[entry].includes(name)) {
      schuelerKurse.push(entry)
    }
  }

  if (schuelerKurse.length == 0) {
    return null
  }

  const stundenplanGesamt = (await readJsonFile(
    "oberstufe/Stundenplan.json",
  )) as string[][]
  const lehrerliste = (await readJsonFile(
    "Lehrerliste.json",
  )) as StringStringMap

  const rows: StundenplanEntry[][] = []
  for (const row of stundenplanGesamt) {
    const entries: Array<StundenplanEntry> = []
    for (const entry of row) {
      let stundenplanEntry: StundenplanEntry = {}
      const words = entry.split(" ")
      for (let i = 0; i < words.length; i += 3) {
        const rawFach = words[i]
        if (!rawFach.includes("/")) {
          const lehrerkuerzel = words[i + 1]
          const kurs = schuelerKurse.find(
            (kurs) =>
              kurs.split(" ")[0].startsWith(rawFach) &&
              kurs.split(" ")[1].slice(1, -1) == lehrerkuerzel,
          )
          if (!kurs) {
            continue
          }
          const fachKuerzel = kurs
            .split(" ")[0]
            .split("_")[0]
            .replace(/\d/g, "")
            .toUpperCase()
          stundenplanEntry = {
            fach:
              fachKuerzel in FACH_KUERZEL
                ? FACH_KUERZEL[fachKuerzel as keyof typeof FACH_KUERZEL]
                : fachKuerzel,
            leher:
              lehrerkuerzel in lehrerliste
                ? lehrerliste[lehrerkuerzel]
                : lehrerkuerzel,
            raum: words[i + 2],
          }
          break
        } else if (rawFach) {
          // TODO implement W-Seminare
          stundenplanEntry = { fach: "W-Seminar", leher: "?", raum: "?" }
        }
      }
      entries.push(stundenplanEntry)
    }
    rows.push(entries)
  }

  return { name: name, table: rows }
}

export default async function OsLoadedStundenplan({ name }: { name: string }) {
  const stundenplan = await loadOsStundenplan(name)
  return stundenplan ? (
    <>
      <h1 className="text-lg mt-5 ml-5">
        Hier ist der Oberstufenplan von {name}
      </h1>
      <RenderedStundenplan stundenplan={stundenplan} />
    </>
  ) : (
    <h1 className="text-lg mt-5 ml-5 text-red-700">
      Es kann kein Stundenplan mit dem Namen {name} generiert werden.
    </h1>
  )
}
