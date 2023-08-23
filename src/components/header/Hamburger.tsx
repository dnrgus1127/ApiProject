"use client";
import React, { ReactEventHandler } from "react";

interface HambugerProps {
  show: boolean;
  onClick: ReactEventHandler;
}

export default function Hamburger({ show, onClick }: HambugerProps) {
  return (
    <div
      className={`relative cursor-pointer h-8 w-10 z-50  `}
      onClick={onClick}
    >
      <span
        className={`h-0.5 w-6 inline-block absolute duration-500 top-1/2 left-1  ${
          show ? "-rotate-45 bg-black " : "-translate-y-1 bg-white  "
        }`}
      ></span>
      <span
        className={`h-0.5  bg-white inline-block absolute top-1/2 left-1 delay-100 duration-300 ${
          show ? "w-0" : "w-6"
        }`}
      ></span>
      <span
        className={`h-0.5  inline-block absolute  duration-500  top-1/2  ${
          show
            ? "rotate-45 w-6 bg-black h-0.75  left-1"
            : "w-3 left-4  bg-white translate-y-1 "
        }`}
      ></span>
    </div>
  );
}
