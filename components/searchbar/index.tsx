"use client";
import React from "react";
import { useJobsContext } from "@/context";
import { roboto400, roboto500 } from "@/styles/font";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, jobFilter }: any = useJobsContext();

  const handleSearchFormSubmit = (event: any) => {
    event?.preventDefault();
    jobFilter(searchTerm);
  };

  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center desktop:w-[1201px] laptop:w-[900px] tablet:w-[635px] mobile:w-[351px] h-[138px] mt-8 bg-search rounded-lg">
      <div className="items-center laptop:w-[700px] tablet:w-[590px] mobile:w-[315px] m-auto bg-white h-[55px] rounded">
        <form
          onSubmit={handleSearchFormSubmit}
          className="flex justify-center items-center h-[55px]"
        >
          <input
            className={`${roboto400.className} rounded  h-[47px] tablet:w-[440px] mobile:w-[210px] mobile:h-[55px] text-xs`}
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder=" Title, companies, expertise or benefits"
          />
          <button
            type="submit"
            className={`${roboto500.className} tablet:w-[145px] mobile:w-[100px] text-white  bg-[#1E86FF] text-base rounded h-[47px] cursor-pointer`}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
