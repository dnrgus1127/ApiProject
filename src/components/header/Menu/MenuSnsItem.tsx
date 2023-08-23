import React, { ReactNode } from "react";

export default function MenuSnsItem({
  text = "Github",
  icon,
}: {
  text: string;
  icon?: ReactNode;
}) {
  return (
    <div className='flex flex-col items-center gap-1 cursor-pointer '>
      <div className='w-10 h-10 border-2 border-greenColor rounded-full  hover:w-12 hover:h-12  duration-300'>
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}
