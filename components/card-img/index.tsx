import React from "react";
import { roboto500 } from "@/styles/font";

export const CardImage = ({ src, h, w }: any) => {
  const defaultİmage = (
    <img
      src={`${src}`}
      alt="Picture of the company"
      className={`rounded h-[${h}px] w-[${w}px] object-scale-down `}
      placeholder="ot found"
    />
  );

  console.log("src", src);

  const notFound = (
    <div
      className={`${roboto500.className} h-[${h}px] w-[${w}px] flex rounded  text-xs text-[#BDBDBD] justify-center items-center`}
    >
      not found
    </div>
  );

  const imgSelector = src !== null || undefined ? defaultİmage : notFound;
  return <div>{imgSelector}</div>;
};
