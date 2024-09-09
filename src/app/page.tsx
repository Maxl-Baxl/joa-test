import Link from "next/link"

export default function Home() {
  return (
    <>
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
        Das hier ist die inoffizielle MGM-Webseite
      </h1>
      <Link
        className="text-blue-600 m-5 underline"
        href="stundenplan-oberstufe"
      >
        Hier geht es zum Stundenplan-Generator für die Oberstufe
      </Link>
      <p className="m-5">
        Info: Diese Webseite wird von Max und Timur (Q12) erstellt. Max kümmert
        sich mehr um die Funktionen, Timur mehr ums Design. Später werden hier
        viele Features sein, die auf der offiziellen MGM-Seite unserer Meinung
        nach einfach fehlen. Seid gespannt, da kommt bald viel cooles dazu.
      </p>
      <p className="m-5">
        Disclaimer: Mit der Webseite haben wir erst am 09.09.2024 begonnen. Da
        so eine Webseite nicht gerade eben mal erstellt wird, ist sie noch sehr
        limitiert, das Design ist beispielsweise komplett provisorisch. Ich
        (Max) wollte jedoch unbedingt ein Stundenplan-Erstell-Feature haben,
        also hab ich mich am selben Tag noch hingesetzt und von morgens bis
        abends durchprogrammiert. Das hier ist keineswegs die vollendete Seite,
        sondern nur ein Prototyp, bei dem man sich einen (noch provisorischen)
        Stundenplan generieren lassen kann. Wenn etwas nicht funktioniert, gibt
        es auch keine Gewähr von uns, also wenn jemand zu spät zur Schule kommt,
        weil der Stundenplan inkorrekt ist, übernehmen Timur und ich nicht die
        Verantwortung dafür (ich hoffe, das ist nicht der Fall, aber Bugs gibt
        es nun mal immer). Zu guter letzt, die Webseite hier ist nicht mit der
        Schulleitung o.ä. abgeklärt, das ist einfach nur ein Hobby-Projekt von
        uns beiden.
      </p>
    </>
  )
}
