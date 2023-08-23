import { RestData } from "@/@types/rest";
import React from "react";
import RestTable from "./RestTable";
import useBoolean from "@/Hooks/useBoolean";

interface RestItemProps {
  data: RestData;
}

const start = "{";
const end = "}";
//
export default function RestItem({ data }: RestItemProps) {
  const [showAnnotaion, onToogleAnnotation] = useBoolean(true);
  return (
    <div className='w-full text-white  px-3 py-3 flex'>
      <div className=' [&_h3]:text-2xl [&_h4]:text-xl w-black'>
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
            <RestTable tableName='본문' data={data.request.body} />
          )}
          <h3>응답</h3>

          {data.response.body && (
            <RestTable tableName='본문' data={data.response.body} />
          )}
        </div>
      </div>
      <div className='w-white pl-8 '>
        <div className='bg-inside w-full relative'>
          <div className='absolute right-1 flex items-center gap-2 p-1 '>
            <label
              htmlFor='annotaion'
              className='ml-2 text-sm font-medium  text-gray-300'
            >
              주석 숨기기
            </label>
            <input
              className='w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
              type='checkbox'
              name='annotaion'
              id=''
              onChange={() => {
                onToogleAnnotation();
              }}
            />
          </div>
          <blockquote className='p-4'>
            <code>
              {start}
              <p className='pl-4'>
                <span className='text-greenColor'>target_id_type</span> :
                user_id
              </p>
              {showAnnotaion && (
                <p className='pl-4 text-[#45894d] text-xs'>
                  // 회원번호 종류, user_id로 고정
                </p>
              )}
              {end}
            </code>
            <br />
            <code>
              {start}
              <p className='pl-4'>
                <span className='text-greenColor'>id</span>: 684535
              </p>
              {showAnnotaion && (
                <p className='pl-4 text-[#45894d] text-xs'>
                  // 연결 끊기에 성공한 사용자의 회원번호
                </p>
              )}
              {end}
            </code>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
