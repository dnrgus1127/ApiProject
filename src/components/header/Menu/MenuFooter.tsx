import React from "react";
import MenuSnsItem from "./MenuSnsItem";

export default function MenuFooter() {
  return (
    <div className='flex h-full'>
      <div className='w-2/5  h-full'>
        <p className=' text-6xl [&>span:hover]:text-greenColor cursor-default '>
          <span className='animate-colortimer-1'>뭔가</span>{" "}
          <span className='animate-colortimer-2'>되게</span>{" "}
          <span className='animate-colortimer-3'>멋있는</span>
        </p>
        <p className='text-greenColor  text-6xl my-4 '>한국어</p>
      </div>
      <div className='w-3/5 h-full  pl-12'>
        <div className='[&>li]:text-3xl  [&>li]:text-pointColor list-none h-3/5'>
          <li className=' hover:text-greenColor cursor-pointer hover:text-4xl duration-300'>
            좀 긴 메뉴 이름
          </li>
          <li className='my-8 hover:text-greenColor cursor-pointer hover:text-4xl duration-300'>
            좀 더어어어어 긴 메뉴 이름
          </li>
        </div>
        <div className='flex h-2/5 justify-between'>
          <MenuSnsItem
            text='Github'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-full h-full fill-black'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            }
          />
          <MenuSnsItem text='KaKao' />
          <MenuSnsItem text='Naver' />
          <MenuSnsItem
            text='Google'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-full h-full fill-black'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z' />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
