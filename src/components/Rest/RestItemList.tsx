"use client";

import React, { useState } from "react";
import RestItem from "./RestItem";
import { RestData } from "@/@types/rest";

interface RestItemListProps {
  data: Array<RestData>;
}

const list = "";

export default function RestItemList({ data }: RestItemListProps) {
  const [type, setType] = useState<"grid" | "list">("list");

  return (
    <div className={list}>
      {data.map((item, idx) => (
        <RestItem key={idx} data={item} />
      ))}
    </div>
  );
}
