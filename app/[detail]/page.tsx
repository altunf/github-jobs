"use client";
import React from "react";
import { Header } from "@/components/header";
import { useSearchParams, useRouter } from "next/navigation";
import { jobs } from "@/services";
import {
  roboto700,
  roboto500,
  roboto400,
  poppins700,
  poppins500,
} from "@/styles/font";
import { CardType } from "@/components/card-job-type";
import { CardIcon } from "@/components/card-icon";
import { CardImage } from "@/components/card-img";
import Link from "next/link";
import { arrow } from "@/styles/icons";

export default function Detail() {
  const searchParams = useSearchParams();
  const jobId = Number(searchParams.get("id"));

  const job = jobs[jobId];
  const back = useRouter();

  return (
    <div>
      <Header />
      <div className="flex mobile:flex-wrap laptop:w-[1197px] tablet:w-[635px] mobile:w-[375px] mt-[33px] mb-[196px]">
        <div className="laptop:w-[308px] tablet:w-[225px]">
          <div className=" mb-9">
            <Link
              href={"/"}
              className={`${poppins500.className} flex items-center text-sm`}
            >
              <div className="w-5 mr-4 ">{arrow}</div>Back to search
            </Link>
          </div>
          <div
            className={`${poppins700.className} mb-4 text-sm text-[#B9BDCF]`}
          >
            HOW TO APPLY
          </div>
          <div
            className={`${poppins500.className} w-[231px] break-words text-sm  text-[#334680]`}
            dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
          ></div>
        </div>

        <div className="laptop:w-[889px] tablet:w-[410px]">
          <div className="flex mobile:flex-wrap mobile:gap-2 items-center text-[#334680]">
            <div className={`${roboto700.className} mb-1 text-2xl mr-4 `}>
              {job.title}
            </div>
            <CardType type={job.type} />
          </div>
          <div
            className={`${roboto500.className} mobile:mt-2 text-xs text-[#B7BCCE] flex`}
          >
            <CardIcon name={"clock"} created={job.created_at} />
          </div>
          <div className="flex mt-8 items-center h-[42px] ">
            <CardImage src={job.company_logo} h={42} w={42} />

            <div className="ml-3">
              <div
                className={`${roboto700.className} mb-1 text-lg text-[#334680]`}
              >
                {job.company}
              </div>
              <div
                className={`${roboto500.className} text-xs text-[#B7BCCE] flex `}
              >
                <CardIcon name={"world"} location={job.location} />
              </div>
            </div>
          </div>

          <div
            className={`${roboto400.className}  text-md text-[#334680] mt-8`}
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
