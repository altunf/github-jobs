"use client";
import React, { useState } from "react";
import { world } from "@/styles/icons";
import { useJobsContext } from "@/context";

export const CityInput = () => {
  const { jobFilter }: any = useJobsContext();
  const [city, setCity] = useState("");

  const handleCityFormSubmit = (event: any) => {
    event?.preventDefault();
    jobFilter(city);
  };

  const handleCityInputChange = (event: any) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleCityFormSubmit}>
      <div className="flex items-center w-[376px] h-12 mt-[14px]">
        <div className="w-[16px] h-[16px] mr-4">{world}</div>
        <input
          type="text"
          className="w-[300px] h-[40px]"
          placeholder=" city, state, zip code or country"
          onChange={handleCityInputChange}
        />
      </div>
    </form>
  );
};
