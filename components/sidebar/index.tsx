"use client";
import React from "react";
import { Cities } from "../cities";
import { poppins700 } from "@/styles/font";

import { CityInput } from "../city-input";
import { FullTime } from "../full-time";

export const Sidebar = () => {
  return (
    <div className="desktop:w-[408px] laptop:w-[375px] tablet:w-[309px] mobile:w-[351px] mt-9">
      <FullTime />
      <div
        className={`${poppins700.className} mt-[30px] text-sm text-[#B9BDCF]`}
      >
        LOCATION
      </div>
      <CityInput />
      <Cities />
    </div>
  );
};
