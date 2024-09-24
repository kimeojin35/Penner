"use client";
import { Bookmark, Heart, Arrow } from "@/assets";
import React, { useState } from "react";
import { ImageSlider } from ".";
import { AlbumSubmitModal } from "./AlbumSubmitModal";
import { useRouter } from "next/navigation";

interface ModalPropsType {
  visible: boolean;
  onClose: () => void;
}

export const ImageModal = ({ visible, onClose }: ModalPropsType) => {
  const [clickLike, setClickLike] = useState<boolean>(false);
  const [clickBookmark, setClickBookmark] = useState<boolean>(false);
  const arr = [
    "https://i.pinimg.com/564x/22/70/55/227055b18ab9855b7e29c253f54dd71c.jpg",
    "https://i.pinimg.com/564x/96/73/d3/9673d3b87a08e3884cc0afc28baa20af.jpg",
    "https://i.pinimg.com/564x/96/f8/68/96f868728e63f3fcbd137d2fb36ffcb8.jpg",
    "https://png.pngtree.com/png-vector/20240129/ourlarge/pngtree-hamster-png-with-ai-generated-png-image_11563624.png",
  ];
  const router = useRouter();

  return (
    <div className={`${visible ? "" : "hidden"}`}>
      <div
        onClick={onClose}
        className="fixed inset-0 flex items-center justify-center w-full h-screen bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-20 backdrop-blur-md"
      />
      <div className="flex h-fit z-10 flex-col w-[608px] gap-8 py-6 bg-white dark:bg-gray900 dark:shadow-gray700 shadow-xl rounded-2xl fixed inset-0 m-auto">
        <ImageSlider imgArr={arr} />
        <div className="flex flex-col w-full gap-5 px-6">
          <p className="w-full text-black text-semibold20 dark:text-white">
            아름다운 재질 홀로그램 무지개빛 컬러 보석 추상 배경 색상 스타일 패턴
            및 아티스트 하하 무슨말쓰지
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 rounded-full cursor-pointer border-gray100 dark:border-gray700" />
              <div
                onClick={() => router.push("/my")}
                className="flex flex-col gap-0.5"
              >
                <p className="text-black cursor-pointer text-bold18 dark:text-white">
                  햄스터
                </p>
                <p className="text-gray500 text-medium14 dark:text-gray500">
                  팔로워 2.8K
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div
                onClick={() => setClickLike(!clickLike)}
                className={`p-3 rounded-full transition-all border border-gray200 dark:border-gray800 dark:hover:bg-gray800 ${
                  clickLike ? "bg-pink50 dark:bg-gray800" : ""
                }`}
              >
                <Heart
                  clicked={clickLike}
                  className={
                    clickLike ? "text-pink500 animate-bouncing" : "text-gray500"
                  }
                />
              </div>
              <div className="relative">
                <div
                  onClick={() => setClickBookmark(!clickBookmark)}
                  className={`p-3 rounded-full transition-all border border-gray200 dark:border-gray800 dark:hover:bg-gray800 ${
                    clickBookmark ? "bg-gray50 dark:bg-gray800" : ""
                  }`}
                >
                  <Bookmark
                    clicked={clickBookmark}
                    className={
                      clickBookmark
                        ? "text-gray700 dark:text-gray100"
                        : "text-gray500"
                    }
                  />
                </div>
                {clickBookmark && <AlbumSubmitModal />}
              </div>
            </div>
          </div>
        </div>
        <p className="text-medium14 px-6 text-gray400">24.06.30 04:37</p>
      </div>
    </div>
  );
};
