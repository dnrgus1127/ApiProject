import { RestTableData } from "@/@types/rest";
import React from "react";

import ObjectBox from "./ObjectBox";

interface RestTableProps {
  tableName: string;
  data: RestTableData;
}

export default function RestTable({ tableName, data }: RestTableProps) {
  return (
    <React.Fragment>
      <h4>{tableName}</h4>
      <div className='sm:flex relative '>
        <table className=' border-collapse [&_th]:border [&_th]:border-gray-400 text-left w-full '>
          <thead className=' bg-bgColor text-borderColor '>
            <tr>
              {data.colObjectList.map((col, idx) => (
                <th key={col.name_kr}>{col.name_kr}</th>
              ))}
            </tr>
          </thead>
          <tbody className='border [&_td]:p-1.5  [&_td]:border [&_td]:border-gray-400 '>
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
        {data.example && <ObjectBox data={data.example} />}
      </div>
    </React.Fragment>
  );
}
