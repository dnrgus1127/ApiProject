import RestItemList from "@/components/Rest/RestItemList";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/dashboard/restItems", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <div>
      <RestItemList data={data} />
    </div>
  );
}
