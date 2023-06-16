"use client";
import React from "react";
import { Card } from "../card";

import { useJobsContext } from "@/context";
import Link from "next/link";
import { Pagination } from "../pagination";

export const ResultArea = () => {
  const { filter, paginationFilter }: any = useJobsContext();

  const filterSelector = filter.length > 5 ? paginationFilter : filter;

  return (
    <div className="desktop:w-[790px]  laptop:w-[520px] tablet:w-[325px] mobile:w-[351px] mt-9 mb-[196px]">
      {filterSelector.map((item: any, index: number) => (
        <Link href={`/detail?id=${item.id}`} key={index}>
          <Card item={item} />
        </Link>
      ))}

      <div className="flex justify-end  items-center ">
        <Pagination />
      </div>
    </div>
  );
};
