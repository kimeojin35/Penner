"use client";
import { Arrow } from "@/assets";
import React, { useState, useEffect, useRef } from "react";

interface ImagePropsType {
  imgArr: string[];
}

export const ImageSlider = ({ imgArr }: ImagePropsType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderInnerRef: any = useRef();

  useEffect(() => {
    sliderInnerRef.current.style.transition = "400ms";
    sliderInnerRef.current.style.transform = `translateX(${
      -608 * currentIndex
    }px)`;
  }, [currentIndex]);

  const goToSlider = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  return (
    <div className="w-[608px] h-[560px] relative overflow-hidden flex">
      <div
        ref={sliderInnerRef}
        className="flex"
        style={{ width: `${608 * imgArr.length}px` }}
      >
        {imgArr.map((img, index) => (
          <div key={index} className="w-[608px] h-[560px]">
            <img
              className="w-[608px] h-[560px] object-contain"
              src={img}
              alt={`이미지${index + 1}`}
            />
          </div>
        ))}
      </div>
      {currentIndex != 0 && (
        <div
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="absolute top-0 bottom-0 left-0 flex items-center w-[50%] my-auto p-4"
        >
          <Arrow direction="left" className="text-black dark:text-white" />
        </div>
      )}
      {currentIndex != imgArr.length - 1 && (
        <div
          onClick={() => setCurrentIndex(currentIndex + 1)}
          className="absolute top-0 bottom-0 right-0 flex items-center justify-end w-[50%] my-auto p-4"
        >
          <Arrow direction="right" className="text-black dark:text-white" />
        </div>
      )}
      <div className="absolute flex gap-2.5 bottom-4 left-0 right-0 mx-auto z-10 justify-center">
        {imgArr.length > 1 &&
          imgArr.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlider(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-pink500" : "bg-black bg-opacity-20"
              }`}
            />
          ))}
      </div>
    </div>
  );
};
