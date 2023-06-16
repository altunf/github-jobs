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
      <div className="flex items-center desktop-[376px] tablet:w-[305px] mobile:w-[351px] h-12 mt-[14px]">
        <div className="w-4 h-4 mr-4">{world}</div>
        <input
          type="text"
          className="w-[300px] tablet:w-[300px] h-[40px]"
          placeholder=" city, state, zip code or country"
          onChange={handleCityInputChange}
        />
      </div>
    </form>
  );
};
