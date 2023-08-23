import React from "react";
import SiteMapMenu from "./SiteMapMenu";

export default function SiteMap() {
  return (
    <div className='flex  w-full h-full bg-green py-12  '>
      <SiteMapMenu />
      <SiteMapMenu />
      <SiteMapMenu />
      <SiteMapMenu />
    </div>
  );
}
