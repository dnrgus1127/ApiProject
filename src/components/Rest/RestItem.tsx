import { RestData } from "@/@types/rest";
import React from "react";
import RestTable from "./RestTable";

interface RestItemProps {
  data: RestData;
}

export default function RestItem({ data }: RestItemProps) {
  return (
    <div className='w-full text-white  sm:px-3 py-3 flex mb-24 '>
      <div className=' [&_h3]:text-2xl [&_h4]:text-xl w-full sm:w-black [&_h3]:py-2 [&_h4]:py-1 bg-bgElement border-borderColor border-opacity-40 border-2 p-3 rounded-md'>
        <h1 className='text-2xl border-gray-300 border-b border-opacity-30 pb-3 mb-3'>{data.title}</h1>
        <p className='text-gray-400'>{data.description}</p>

        
        <div className='w-full border-[1px] border-gray-200 border-opacity-30  flex p-1 bg-bgColor'>
          <p
            className={`pr-1 uppercase ${
              data.method === "delete" ? "text-red-700" : "text-greenColor"
            }`}
          >
            <span className="bg-bgColor uppercase text-greenColor rounded-md inline-block px-1.5 py-px">{data.method}</span>
          </p>

          <p className='flex-1'>{data.url}</p>
          <p></p>
        </div>

        <div className='w-full  [&_th]:py-4 [&_th]:px-3 [&_td]:px-3'>
          <h3>요청</h3>
          {data.request.header && (
            <RestTable tableName='헤더' data={data.request.header} />
          )}
          {data.request.body && (
            <RestTable tableName='본문' data={data.request.body} />
          )}
          <h3>응답</h3>

          {data.response.body && (
            <RestTable tableName='본문' data={data.response.body} />
          )}
        </div>
      </div>
    </div>
  );
}
