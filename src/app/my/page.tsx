"use client";
import { UserProfile, MasonryLayout } from "@/components";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const randomHeight = [
  "h-[371px]",
  "h-[236px]",
  "h-[495px]",
  "h-[311px]",
  "h-[357px]",
  "h-[366px]",
  "h-[311px]",
  "h-[495px]",
  "h-[370px]",
];

function My() {
  const pathname = usePathname();
  const [clickList, setClickList] = useState<number>(0);

  const list = ["갤러리", "TIP", "게시글", "정보"];

  return (
    <div className="flex justify-center w-full px-6 bg-gray50 dark:bg-gray950">
      <div className="flex flex-col gap-16 px-6 py-8 w-[1200px]">
        <UserProfile />
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between w-full border-b border-gray200 dark:border-gray800">
            <div className="relative flex items-center gap-2">
              <div
                className="w-[74px] h-0.5 bg-gray900 dark:bg-white absolute bottom-0 transition-all"
                style={{ left: `${clickList * 82}px` }}
              />
              {list.map((text, index) => (
                <div
                  key={index}
                  onClick={() => setClickList(index)}
                  className={`${
                    clickList == index
                      ? "text-gray900 dark:text-white"
                      : "text-gray500 dark:text-gray400"
                  } cursor-pointer w-[74px] justify-center hover:text-gray900 text-medium16 flex p-4`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
          <MasonryLayout ImageCardArr={randomHeight} searchState={""} />
        </div>
      </div>
    </div>
  );
}

export default My;
