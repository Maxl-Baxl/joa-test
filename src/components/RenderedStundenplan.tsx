import { SCHOOL_DAYS } from "@/lib/constants"

export default function RenderedStundenplan({
  stundenplan,
}: {
  stundenplan: Stundenplan
}) {
  const rows = stundenplan.table.length
  const columns = SCHOOL_DAYS.length
  return (
    <div className="m-5 relative overflow-x-auto">
      <table className="table-auto text-left border-collapse">
        <caption className="text-center text-2xl pb-2">
          Stundenplan für {stundenplan.name}
        </caption>
        <thead>
          <tr className="border p-3">
            <th scope="col" key={0} className="border p-3" />
            {Array.from(Array(columns).keys()).map((columnIndex) => (
              <th scope="col" key={columnIndex + 1} className="border p-3">
                {SCHOOL_DAYS[columnIndex]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(rows).keys()).map((rowIndex) => (
            <tr key={rowIndex} className="border p-3">
              <th scope="row" key={0} className="border p-3">
                {rowIndex + 1}
              </th>
              {Array.from(Array(columns).keys()).map((columnIndex) => (
                <td key={columnIndex + 1} className="border p-3">
                  {
                    <p className="pb-2">
                      {stundenplan.table[rowIndex][columnIndex].fach}
                    </p>
                  }
                  {
                    <p className="pb-2">
                      {stundenplan.table[rowIndex][columnIndex].leher}
                    </p>
                  }
                  {<p>{stundenplan.table[rowIndex][columnIndex].raum}</p>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
