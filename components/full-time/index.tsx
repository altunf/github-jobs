import React from "react";
import { CheckInput } from "../input";

export const FullTime = () => {
  return (
    <div className="flex">
      <CheckInput
        props={"Full time"}
        type={"checkbox"}
        name={"fulltime"}
        style={" border-[#B9BDCF] w-[18px] h-[18px]"}
      />
    </div>
  );
};
