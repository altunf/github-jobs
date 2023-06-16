import React from "react";
import { roboto500 } from "@/styles/font";

export const CardImage = ({ src, h, w }: any) => {
  return (
    <div>
      <img
        src={`${src}`}
        alt="Picture of the company"
        className={`rounded h-[${h}px] tablet:w-[${w}px] mobile:w-[${w}px] object-scale-down `}
        placeholder="ot found"
      />
    </div>
  );
};
