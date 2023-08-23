import React, { ReactNode } from "react";

export default async function Page(props: { rest: ReactNode }) {
  return <div>{props.rest}</div>;
}
