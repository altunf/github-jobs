"use client";
import React from "react";
import { useJobsContext } from "@/context";
import { roboto400 } from "@/styles/font";

export const Pagination = () => {
  const { filter, setPaginationFilter }: any = useJobsContext();

  const mod = filter.length % 5;
  const equal = mod === 0;
  const division = Math.trunc(filter.length / 5);

  let NumberOfPages: any;
  const pageNumber = [];

  if (filter.length > 5) {
    equal ? (NumberOfPages = division) : (NumberOfPages = division + 1);
  }

  for (let i = 1; i < NumberOfPages + 1; i++) {
    pageNumber.push(i);
  }

  const handlePaginationClick = (item: number) => {
    const perPage: any = [];
    const start = (item - 1) * 5;
    const stop = item === NumberOfPages ? start + mod : start + 5;

    for (let j = start; j < stop; j++) {
      perPage.push(filter[j]);
    }

    setPaginationFilter(perPage);
  };

  return (
    <>
      {pageNumber.map((item, index) => (
        <button
          key={index}
          className={`${roboto400.className} w-9 h-9  rounded ml-3 text-[#B7BCCE] border text-xs`}
          aria-hidden="true"
          onClick={() => {
            handlePaginationClick(item);
          }}
        >
          {item}
        </button>
      ))}
    </>
  );
};
