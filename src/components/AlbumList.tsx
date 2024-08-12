"use client";
import { Check } from "@/assets";
import React, { useState } from "react";

interface AlbumListProps {
  imgSrc?: string;
  title?: string;
}

export const AlbumList = ({ imgSrc, title }: AlbumListProps) => {
  const [imgSubmit, setImgSubmit] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between w-full p-2 transition-all bg-white dark:bg-gray900 group rounded-xl hover:bg-gray100 dark:hover:bg-gray800">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 border rounded-lg bg-gray50 dark:border-gray700 border-gray200"></div>
        <p className="text-black text-medium16 dark:text-white">{title}</p>
      </div>
      {imgSubmit ? (
        <>
          <Check className="text-pink500 group-hover:hidden" />
          <button
            onClick={() => setImgSubmit(false)}
            className="hidden px-4 py-2 rounded-full dark:bg-gray700 dark:hover:bg-gray600 dark:text-gray400 text-gray600 group-hover:flex bg-gray200 hover:bg-gray300 text-medium16"
          >
            취소
          </button>
        </>
      ) : (
        <button
          onClick={() => setImgSubmit(true)}
          className="hidden px-4 py-2 text-white rounded-full dark:bg-gray200 dark:hover:bg-gray300 dark:text-gray900 group-hover:flex bg-gray800 hover:bg-gray900 text-medium16"
        >
          저장
        </button>
      )}
    </div>
  );
};
