import Link from "next/link";
import axios from "axios";
import cheerio from "cheerio";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://www.michaeli-gymnasium.de/infos-und-termine/termine")
      .then(response => {
        const $ = cheerio.load(response.data);
        const eventsList = [];
        $(".termin-liste li").each((index, element) => {
          eventsList.push($(element).text());
        });
        setEvents(eventsList);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <img src="https://wwwalt.michaeli-gymnasium.de/media/basics/logo-mgm.gif" alt="MGM Logo" className="max-w-[600px] mb-5" />
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
          <Link href="https://wwwalt.michaeli-gymnasium.de/">
            <a className="bg-blue-800 hover:bg-blue-900 text-white p-4 m-2 rounded">
              Alte MGM Website
            </a>
          </Link>
        </div>
      </nav>
      <h1 className="text-lg mt-5 ml-5 mb-3">
        Das hier ist die inoffizielle MGM-Webseite von Max und Timur, gerippt von Maxl
      </h1>
      <h2 className="text-lg mt-5 ml-5 mb-3">
        Termine:
      </h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </>
  );
}
