import { readTextFile, writeJsonFileData } from "../script-utils"

function loadLehrerlisteJson() {
  const json: StringStringMap = {}
  const text = readTextFile("scripts/lehrer/Lehrerliste.txt")
  const lines = text.split("\n")
  for (let i = 0; i < lines.length; i += 2) {
    json[lines[i]] = lines[i + 1]
  }
  writeJsonFileData("Lehrerliste.json", json)
}

loadLehrerlisteJson()
