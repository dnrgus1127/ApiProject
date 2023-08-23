import { RestData } from "@/@types/rest";
import React from "react";
import RestTable from "./RestTable";
import useBoolean from "@/Hooks/useBoolean";
import AnnotaionBox from "./ObjectBox";

interface RestItemProps {
  data: RestData;
}


export default function RestItem({ data }: RestItemProps) {
  return (
    <div className='w-full text-white  px-3 py-3 flex'>
      <div className=' [&_h3]:text-2xl [&_h4]:text-xl w-black [&_h3]:py-2 [&_h4]:py-1'>
        <div className='flex justify-between items-start py-1 border-gray-300 border-b-2'>
          <h1 className='text-3xl'>{data.title}</h1>
          <h3 className='text-l'>
            No.
            <span className='text-greenColor'>{data.id}</span>
          </h3>
        </div>
        <p className='text-gray-400'>{data.description}</p>

        <div className='w-full border-[1px] border-gray-200 flex p-1 bg-inside'>
          <p
            className={`pr-1 uppercase ${
              data.method === "delete" ? "text-red-700" : "text-greenColor"
            }`}
          >
            {data.method}
          </p>

          <p className='flex-1'>{data.url}</p>
          <p></p>
        </div>

        <div className='w-full [&_th]:bg-inside [&_th]:py-4 [&_th]:px-3 [&_td]:px-3'>
          <h3>요청</h3>
          {data.request.header && (
            <RestTable tableName='헤더' data={data.request.header} />
          )}
          {data.request.body && (
            
            <RestTable tableName='본문' data={data.request.body} object={ {name : "day"}} />
              
            
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
