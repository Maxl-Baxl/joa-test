import { readFileSync, writeFileSync } from "fs"
import path from "path"

export function readFile(roothPath: string): string {
  return readFileSync(path.join(process.cwd(), roothPath), "utf8")
}

export function readTextFile(roothPath: string): string {
  return readFile(roothPath).replace(/\r?\n/g, "\n")
}

export function readJsonFile(roothPath: string): any {
  const file = readFile(roothPath)
  return JSON.parse(file)
}

export function writeTextFileData(dataPath: string, content: string) {
  writeFileSync(path.join(process.cwd(), "src/app/data", dataPath), content)
}

export function writeJsonFileData(dataPath: string, content: any) {
  writeTextFileData(dataPath, JSON.stringify(content, null, 2))
}
