"use client";

import React, { SyntheticEvent, useState } from "react";
import Hamburger from "./Hamburger";
import useBoolean from "@/Hooks/useBoolean";
import Menu from "./Menu/Menu";

export default function Header() {
  const [showMenu, onToggleShowMenu] = useBoolean();

  return (
    <div className='fixed w-full top-0 left-0 justify-between  flex px-12 py-4  font-semibold items-center '>
      <h1
        className={`${
          showMenu ? "text-black " : "text-white"
        } font-semibold z-40 text-2xl`}
      >
        로고
      </h1>
      <div>
        <Hamburger show={showMenu} onClick={onToggleShowMenu} />
      </div>
      <Menu show={showMenu} />
    </div>
  );
}
