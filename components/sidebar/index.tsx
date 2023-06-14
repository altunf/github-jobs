"use client";
import React from "react";
import { Cities } from "../cities";
import { poppins700 } from "@/styles/font";

import { CityInput } from "../city-input";
import { FullTime } from "../full-time";

export const Sidebar = () => {
  return (
    <div className="w-[379px] h-[900px] mt-9">
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
