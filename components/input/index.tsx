"use client";
import React from "react";
import { useJobsContext } from "@/context";
import { poppins500 } from "@/styles/font";

export const CheckInput = ({ props, type, name, style }: any) => {
  const { jobFilter }: any = useJobsContext();
  return (
    <>
      <input
        id={props}
        value={props.toLowerCase()}
        name={name}
        type={type}
        className={style}
        onChange={() => {
          jobFilter(props.toLowerCase());
        }}
      />
      <label
        className={`${poppins500.className} ml-3 text-[#334680] text-sm`}
        htmlFor={props}
      >
        {props}
      </label>
    </>
  );
};
