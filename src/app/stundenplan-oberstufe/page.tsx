import StundenplanOsInput from "@/components/StundenplanOsInput"

export default function StundenplanOsPage() {
  return (
    <>
      <h1 className="text-lg mt-5 ml-5">
        Hier kann man sich einen Stundenplan generieren lassen
      </h1>
      <p className="m-5">
        Dazu muss der Name eingegeben werden - z.B. Mustermann, Max - und danach
        auf &quot;Generiere Stundenplan&quot; geklickt werden
      </p>
      <StundenplanOsInput />
      <p className="m-5">
        Das Programm ist jedoch noch nicht vollständig, das Design wird noch von
        Timur überarbeitet und von Max werden noch ein paar Bugs gefixt. Dazu
        zählt, dass das W-Seminar nicht mit Raum und Lehrer angezeigt wird und
        dass das Programm für Geschwister mit langem Nachnamen nicht
        funktioniert. Beides sind Probleme, die das MGM schon bei den
        PDF-Dateien auf Mebis gemacht hat und manuell behoben werden müssen.
      </p>
      <p className="m-5">
        Bittet habt Verständnis, dass noch nicht alles funktioniert. Da das MGM
        so langsam mit den Stundenplänen war, musste Max die ganze Webseite an
        einem Tag erstellen.
      </p>
    </>
  )
}
