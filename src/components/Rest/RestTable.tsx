import { RestTableData } from "@/@types/rest";
import React from "react";

import ObjectBox from "./ObjectBox";

interface RestTableProps {
  tableName: string;
  data: RestTableData;
  object? : object | any
}

export default function RestTable({ tableName, data, object }: RestTableProps) {
  return (
    <React.Fragment>
      <h4>{tableName}</h4>
      <div className="flex relative">
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
        {object && <ObjectBox/>}

      </div>
    </React.Fragment>
  );
}
