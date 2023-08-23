import React, { ReactNode, Suspense } from "react";

export default function Layout(props: {
  children: ReactNode;
  rest: ReactNode;
}) {
  return (
    <div className='px-12 py-16'>
      {props.rest}
      <Suspense fallback={<p>loading...</p>}>{props.children}</Suspense>
    </div>
  );
}
