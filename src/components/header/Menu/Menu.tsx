import React from "react";
import SiteMap from "./SiteMap";
import MenuFooter from "./MenuFooter";

interface MenuProps {
  show: boolean;
}

export default function Menu({ show }: MenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full    ${
        show && "bg-[rgba(0,0,0,.5)]   "
      } transition-colors duration-500`}
    >
      <div
        className={`bg-white w-1/2 h-[100vh] absolute top-0 left-0 duration-1000 ${
          show ? "translate-x-0" : "-translate-x-full"
        } `}
      ></div>
      <div
        className={`bg-white  w-1/2 h-[100vh] right-0 absolute duration-1000 ${
          show ? "translate-x-0" : "translate-x-full"
        } `}
      ></div>
      {show && (
        <div className='absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center'>
          <div className='w-5/6 h-5/6  opacity-0 animate-opacity-1 '>
            <div className='w-full h-2/3 py-12'>
              <SiteMap />
            </div>
            <div className='h-1/3 x-full  opacity-0 animate-opacity-1.5 '>
              <MenuFooter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
