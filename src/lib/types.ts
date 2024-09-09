type StundenplanEntry = {
  fach?: string
  leher?: string
  raum?: string
}

type Stundenplan = {
  name: string
  table: StundenplanEntry[][]
}

type Kursliste = {
  [key: string]: string[]
}

type StringStringMap = {
  [key: string]: string
}

