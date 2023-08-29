import { ExampleData } from "@/@types/rest";
import useBoolean from "@/Hooks/useBoolean";
import React from "react";

const start = "{";
const end = "}";

export default function ObjectBox({ data }: { data: ExampleData }) {
  const keys: string[] = Object.keys(data);
  const [showAnnotaion, onToogleAnnotation] = useBoolean(true);

  return (
    <div className='bg-inside sm:w-white sm:absolute right-0 sm:translate-x-[105%]'>
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
      <div className='p-4'>
        <code>
          {start}
          {keys.map((key, idx) => {
            return (
              <React.Fragment>
                <p className='pl-4'>
                  <span className='text-greenColor'>{key}</span> :{" "}
                  {typeof data[keys[idx]].value === "string"
                    ? `"${data[keys[idx]].value}"`
                    : data[keys[idx]].value}
                </p>
                {showAnnotaion && (
                  <p className='pl-4 text-[#45894d] text-xs'>
                    // {data[keys[idx]].annotaion}
                  </p>
                )}
              </React.Fragment>
            );
          })}
          {end}
        </code>
      </div>
    </div>
  );
}
