import { promises as fs } from "fs"
import path from "path"

export async function readJsonFile(localPath: string): Promise<unknown> {
  const file = await fs.readFile(
    path.join(process.cwd(), "src/app/data", localPath),
    "utf8"
  )
  return JSON.parse(file)
}
