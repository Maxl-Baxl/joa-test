import Link from "next/link"

export default function Home() {
  return (
    <>
      <img src="https://wwwalt.michaeli-gymnasium.de/media/basics/logo-mgm.gif" alt="MGM Logo" className="w-full mb-5" />
      <nav className="flex justify-between mb-5">
        <div className="flex flex-wrap justify-center">
          <Link href="https://wwwalt.michaeli-gymnasium.de/intern/vplan/vplanmgm.php?vplan=schueler1">
            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">
              Vertretungsplan Heute
            </a>
          </Link>
          <Link href="https://wwwalt.michaeli-gymnasium.de/intern/vplan/vplanmgm.php?vplan=schueler2">
            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">
              Vertretungsplan Morgen
            </a>
          </Link>
          <Link href="stundenplan-oberstufe">
            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">
              Stundenplan-Tool
            </a>
          </Link>
          <Link href="/">
            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">
              Box 4
            </a>
          </Link>
        </div>
      </nav>
      <h1 className="text-lg mt-5 ml-5 mb-3">
        Das hier ist die inoffizielle MGM-Webseite von Max und Timur, offiziell gerippt von Maxl
      </h1>
    </>
  )
}
