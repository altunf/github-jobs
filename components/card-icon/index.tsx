import React from "react";
import { clock, world } from "@/styles/icons";

export const CardIcon = ({ name, location, created }: any) => {
  const IconGenerate = (params: any) => {
    return (
      <>
        <span className="w-4 h-4"> {name === "world" ? world : clock}</span>
        <span className="ml-2 ">{params}</span>
      </>
    );
  };

  return (
    <>
      {name === "world" && IconGenerate(location)}
      {name === "clock" && IconGenerate(created)}
    </>
  );
};
