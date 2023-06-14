import React from "react";
import { CheckInput } from "../input";
import { roboto400 } from "@/styles/font";

export const Cities = () => {
  const cityList = ["London", "Amsterdam", "New York", "Berlin"];
  const citiesStyle = `${roboto400.className} text-xs h-[18px] w-[18px]`;

  return (
    <div className="mt-6">
      {cityList.map((item: any, index: number) => (
        <li key={index} className="mb-[19px] flex items-center">
          <CheckInput
            props={item}
            type={"radio"}
            name={"cities"}
            style={citiesStyle}
          />
        </li>
      ))}
    </div>
  );
};
