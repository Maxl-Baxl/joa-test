import Link from "next/link"


export default function Home() {

  return (

    <>

      <nav className="flex justify-between mb-5">

        <div className="flex flex-wrap justify-center">

          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">

            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">

              Vertretungsplan Heute

            </a>

          </Link>

          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">

            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">

              Vertretungsplan Morgen

            </a>

          </Link>

          <Link href="stundenplan-oberstufe">

            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">

              Stundenplan-Tool

            </a>

          </Link>

          <Link href="wwwalt.michaeli-gymnasium.de">

            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">

              Alte Website

            </a>

          </Link>

        </div>

      </nav>

      <h1 className="text-lg mt-5 ml-5 mb-3">

        Das hier ist die inoffizielle MGM-Webseite von Max, gerippt von Maxl

      </h1>

    </>

  )

}
