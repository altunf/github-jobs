import React from "react";
import { CardImage } from "../card-img";
import { CardIcon } from "../card-icon";
import { CardType } from "../card-job-type";
import { roboto700, roboto400 } from "@/styles/font";
//md:w-[686px] sm:w-[344px]
export const Card = ({ item }: any) => {
  return (
    <div className="flex items-center h-[114px] desktop:w-[790px] laptop:w-[519px] tablet:w-[326px] mobile:w-[351px] shadow-sm rounded mb-8">
      <div className="flex h-[90px] ">
        <CardImage src={item.company_logo} h={90} w={90} />

        <div className="ml-4 text-[#334680]  desktop:w-[775px] laptop:w-[420px] tablet:w-[320px] ">
          <div className={`${roboto700.className} text-xs mb-1 `}>
            {" "}
            {item.company}{" "}
          </div>
          <div className={`${roboto400.className} mb-1 text-lg`}>
            {item.title}
          </div>
          <div className="flex sm:flex-wrap items-center justify-between">
            <CardType type={item.type} w={63} h={26} />
            <div
              className={`${roboto700.className} text-xs text-[#B7BCCE] flex`}
            >
              <div className="flex items-center mr-8">
                <CardIcon name={"world"} location={item.location} />
              </div>
              <div className="flex items-center">
                <CardIcon name={"clock"} created={item.created_at} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
