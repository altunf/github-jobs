"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { poppins300, poppins700 } from "@/styles/font";

export const Header = () => {
  const home = useRouter();
  return (
    <div
      className="mt-8 text-2xl cursor-pointer "
      onClick={() => {
        home.push("/");
      }}
    >
      <span className={poppins700.className}>Github</span>{" "}
      <span className={poppins300.className}>Jobs</span>
    </div>
  );
};
