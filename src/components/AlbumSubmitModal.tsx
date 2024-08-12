"use client";
import { Plus } from "@/assets";
import React, { useState, useEffect } from "react";
import { AlbumList } from "./AlbumList";

const list = ["UI/UX", "디자인", "모바일", "프론트엔드"];

export const AlbumSubmitModal = () => {
  const [pressed, setPressed] = useState<number>(0);
  const [valueFilter, setValueFiltere] = useState<string[]>(list);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    filterInputValue();
  }, [inputValue]);

  const filterInputValue = () => {
    const filtered = list.filter((i) => i.includes(inputValue));
    setValueFiltere(filtered);
  };
  return (
    <div className="rounded-2xl overflow-hidden z-20 absolute left-0 bottom-16 w-[340px] h-[428px] flex gap-3 flex-col shadow-md bg-white dark:bg-gray900 dark:shadow-gray800">
      <div className="flex w-full px-2 py-1 border-b dark:border-gray800 border-gray100">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-3 py-4 text-black placeholder:text-gray400 dark:text-white text-medium18"
          placeholder="앨범 검색"
        />
      </div>
      <div className="flex flex-col w-full h-full px-2 py-1 overflow-y-scroll">
        {valueFilter.length > 0 ? (
          <>
            {valueFilter.map((school, index) => (
              <AlbumList key={index} title={school} />
            ))}
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-medium16 dark:text-gray600 text-gray300">
              앨범이 아직 없어요
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center w-full gap-3 p-4 bg-white cursor-pointer dark:bg-gray900 hover:bg-gray50">
        <div className="p-2 rounded-lg bg-gray100 dark:bg-gray800">
          <Plus className="text-gray400 dark:text-gray500" />
        </div>
        <p className="text-gray600 dark:text-gray300 text-medium18">
          앨범 만들기
        </p>
      </div>
    </div>
  );
};
