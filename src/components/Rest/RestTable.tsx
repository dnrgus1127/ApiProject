import { RestTableData } from "@/@types/rest";
import React from "react";

interface RestTableProps {
  tableName: string;
  data: RestTableData;
}

export default function RestTable({ tableName, data }: RestTableProps) {
  return (
    <React.Fragment>
      <h4>{tableName}</h4>
      <table className='border-2 border-collapse [&_th]:border-2 [&_td]:border-2 text-left w-full'>
        <thead className='border-2'>
          <tr>
            {data.colObjectList.map((col, idx) => (
              <th key={col.name_kr}>{col.name_kr}</th>
            ))}
          </tr>
        </thead>
        <tbody className='border-2'>
          {data.rowObjectList.map((row, idx) => {
            return (
              <tr key={row.name + 1}>
                {data.colObjectList.map((col) => (
                  <td key={col.name_kr}>
                    {typeof row[col.name] !== "boolean"
                      ? row[col.name]
                      : row[col.name]
                      ? "O"
                      : "X"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
