import React from "react";
import { roboto700 } from "@/styles/font";

export const CardType = ({ type, ml }: any) => {
  return (
    <div
      className={`${roboto700.className} items-center rounded text-xs flex border-[#334680] border w-[63px] h-[26px] justify-center ml-[${ml}px]`}
    >
      {type}
    </div>
  );
};
