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
    <div className="mt-8 flex justify-center h-[138px] w-[1201px] bg-search rounded-lg">
      <div className="m-auto  bg-white  h-[55px] w-[790px] items-center rounded">
        <form
          onSubmit={handleSearchFormSubmit}
          className="flex justify-center items-center h-[55px] "
        >
          <input
            className={`${roboto400.className} rounded  h-[47px] w-[640px] text-xs`}
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder=" Title, companies, expertise or benefits"
          />
          <button
            type="submit"
            className={`${roboto500.className} text-white bg-[#1E86FF] text-base rounded h-[47px] w-[146px] cursor-pointer`}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
