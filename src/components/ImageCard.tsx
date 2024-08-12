"use client";
import { Heart } from "@/assets";
import React, { useState } from "react";
import styled from "styled-components";

interface ImagePropsType {
  height?: string;
  title?: string;
  onClick?: () => void;
}

export const ImageCard = ({ height, title, onClick }: ImagePropsType) => {
  const [clickLike, setClickLike] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-1.5 mb-7 z-0 break-inside-avoid-column">
      <div className="relative group">
        <div
          onClick={onClick}
          className={`bg-gray200 group relative rounded-xl w-[236px] ${height}`}
        />
        <div
          onClick={() => setClickLike(!clickLike)}
          className="absolute p-3 transition-all bg-white rounded-full opacity-0 peer group-hover:opacity-100 right-4 bottom-4"
        >
          <Heart
            clicked={clickLike}
            className={` z-20 ${
              clickLike ? "text-pink500 animate-bouncing" : "text-gray500"
            }`}
          />
        </div>
      </div>
      <p className="dark:text-white text-medium16 text-gray900">{title}</p>
    </div>
  );
};
