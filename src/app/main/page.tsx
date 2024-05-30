import React from "react";
import Banner from "./Banner";
import { Arrow_Right } from "@/assets";
import TipCard from "@/components/main/TipCard";
import { GoToSee } from "@/components/GoToSee";

function Main() {
  return (
    <div className="flex flex-col w-full pt-[64px] items-center">
      <Banner />
      <div className="flex flex-col max-w-[1400px] w-full gap-24 px-6 py-12">
        <div className="flex flex-col w-full gap-7">
          <div className="flex w-full itmes-center justify-between">
            <p className="text-black text-title24Bold">새로 나온 팁</p>
            <GoToSee text="모든 팁 보러가기" />
          </div>
          <div className="gap-4 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
          </div>
        </div>
        <div className="flex flex-col w-full gap-7">
          <div className="flex w-full itmes-center justify-between">
            <p className="text-black text-title24Bold">오늘의 인기 팁</p>
            <GoToSee text="모든 팁 보러가기" />
          </div>
          <div className="gap-4 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
