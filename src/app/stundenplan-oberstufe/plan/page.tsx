import OsLoadedStundenplan from "@/components/OsLoadedStundenplan"
import { Suspense } from "react"

type StundenplanOsPageParams = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function StundenplanOsPage({
  searchParams,
}: StundenplanOsPageParams) {
  return (
    <>
      {searchParams?.name && typeof searchParams.name == "string" ? (
        <Suspense
          fallback={
            <h1 className="text-lg mt-5 ml-5">Generiert Stundenplan...</h1>
          }
        >
          <OsLoadedStundenplan name={searchParams.name} />
        </Suspense>
      ) : (
        <h1 className="text-lg mt-5 ml-5 text-red-700">
          Es wurde kein korrekter Name angegeben
        </h1>
      )}
    </>
  )
}
