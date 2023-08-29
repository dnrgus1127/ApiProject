"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import useBoolean from "@/Hooks/useBoolean";
import Menu from "./Menu/Menu";
import { throttle } from "loadsh";

export default function Header() {
  const [showMenu, onToggleShowMenu] = useBoolean();

  const [visible, setVisible] = useState(true);

  const beforeScrollY = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useMemo(() => {
    return throttle(() => {
      const currentScrollY = window.scrollY;
      if (beforeScrollY.current < currentScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      beforeScrollY.current = currentScrollY;
      // console.log(beforeScrollY.current);
    }, 250);
  }, [beforeScrollY]);

  return (
    <div
      className={`fixed w-full ${
        visible ? "top-0" : "-top-full"
      } left-0 justify-between flex px-12 py-4 font-semibold items-center bg-bgColor2 z-50 duration-500  shadow-[#FFFFFF22] shadow-md`}
    >
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
