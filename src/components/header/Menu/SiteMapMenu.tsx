import React from "react";

export default function SiteMapMenu() {
  return (
    <div className='flex-1 text-center border-r-2 last:border-r-0'>
      <h1 className='text-4xl text-pointColor mb-4  '>타이틀</h1>
      <ul className='list-none '>
        <li className='py-2 text-base font-bold font-Roboto   hover:text-2xl cursor-pointer duration-200 ease-out hover:text-greenColor'>
          SubTitle
        </li>
        <li className='py-2 text-base font-bold hover:text-2xl cursor-pointer duration-200 ease-out hover:text-greenColor'>
          이용안내
        </li>
        <li className='py-2 text-base font-bold  hover:text-2xl cursor-pointer duration-200 ease-out hover:text-greenColor'>
          요금안내
        </li>
        <li className='py-2 text-base font-bold hover:text-2xl cursor-pointer duration-200 ease-out hover:text-greenColor'>
          주의 사항
        </li>
      </ul>
    </div>
  );
}
