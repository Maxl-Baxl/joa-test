'use client';

import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-10 bg-green-800 text-white flex justify-end ${darkMode ? "dark-mode" : ""}`}>
        <button className="p-2 m-2 rounded" onClick={toggleDarkMode}>
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
      <nav className="flex justify-between mb-5 mt-10">
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
  );
}
