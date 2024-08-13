"use client";
import React, { useState } from "react";
import { Search, Slider } from "@/assets";
import { RelatedSearchTag } from "@/components";
import { MasonryLayout } from "@/components/MasonryLayout";
import { useRouter } from "next/navigation";

const tagList = ["색조합", "배경화면", "디자인"];
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

function Gallery() {
  const router = useRouter();
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex justify-center pb-40 w-full bg-gray50 dark:bg-gray950">
      <div className="flex flex-col gap-10 py-8 pl-32 pr-6 w-[1292px]">
        <div className="w-full flex justify-between items-end pt-[116px]">
          <p
            onClick={() => {
              router.push("gallery");
              setSearchValue("");
            }}
            className="text-black text-bold40 dark:text-white cursor-pointer"
          >
            갤러리
          </p>
          <div className="flex justify-end">
            <div
              className={`flex border-b transition-all ${
                isInputFocused
                  ? "border-black dark:border-white"
                  : "border-gray200 dark:border-gray700"
              } ${visibleSearch ? "w-72" : "w-0"}`}
            >
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-1 py-2.5 text-medium18 text-black dark:text-white border border-gray200 placeholder:text-gray300 dark:placeholder:text-gray600"
                placeholder="검색어를 입력해주세요"
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
            </div>

            <div className="w-[42px] h-[42px] flex justify-center items-center">
              <Search
                onClick={() => setVisibleSearch(!visibleSearch)}
                className="text-gray800 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full gap-5">
          <Slider className="text-gray500" />
          <div className="flex gap-2.5 items-center">
            {tagList.map((text, index) => (
              <RelatedSearchTag
                onClick={() => {
                  setVisibleSearch(true);
                  setSearchValue(text);
                }}
                key={index}
                text={text}
              />
            ))}
          </div>
        </div>
        {/*내인생 */}
        <MasonryLayout searchState={searchValue} ImageCardArr={randomHeight} />
      </div>
    </div>
  );
}

export default Gallery;
