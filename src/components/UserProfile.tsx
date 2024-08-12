"use client";
import { More } from "@/assets";
import React, { useState } from "react";
import { Button } from ".";

interface UserPageProps {
  name?: string;
  id?: string;
  follower?: number;
  folloing?: number;
  postTotalNum?: number;
  details?: string;
}

const detail = `인도에서 배젠드를 하고 있는 이태young이라고 합니다.\디자인도 좀 칩니다.`;

export const UserProfile = ({
  name = "햄스터",
  id = "hamster_35",
  follower = 2734,
  folloing = 9,
  postTotalNum = 37,
  details = detail,
}: UserPageProps) => {
  const [clickMore, setClickMore] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const changeFolloing = () => {
    if (folloing >= 1000) {
      return `${(folloing / 1000).toFixed(1)}K`;
    } else return folloing;
  };
  const changeFollwer = () => {
    if (follower >= 1000) {
      return `${(follower / 1000).toFixed(1)}K`;
    } else return follower;
  };

  const profileOverView = [
    { text: "팔로워", num: changeFollwer() },
    { text: "팔로잉", num: changeFolloing() },
    { text: "게시글", num: postTotalNum },
  ];

  const clickMoreHandle = () => {
    setClickMore(!clickMore);
  };
  return (
    <div className="flex flex-col gap-6 pt-28">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <div className="border-2 w-[120px] h-[120px] rounded-full border-gray200 dark:border-gray800" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-black text-bold36 dark:text-white">{name}</p>
              <p className="text-gray600 text-medium16 dark:text-gray500">
                {id}
              </p>
            </div>
            <div className="flex gap-3">
              {profileOverView.map(({ text, num }, index) => (
                <div key={index} className="flex items-center gap-1">
                  <p className="text-gray500 dark:text-gray500 text-medium16">
                    {text}
                  </p>
                  <p className="text-gray900 dark:text-gray400 text-semibold16">{`${num}`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setFollow(!follow)}
            clicked={follow}
            className="px-5 py-3.5"
          >
            <p
              className={`${
                follow ? "text-gray800 dark:text-white" : "text-white"
              }`}
            >
              {follow ? "언팔로우" : "팔로우"}
            </p>
          </Button>
          <div
            onClick={() => clickMoreHandle()}
            className="flex hover:bg-gray100 p-3.5 relative rounded-full border border-gray200 bg-gray50 dark:bg-gray950 dark:hover:bg-gray900 dark:border-gray800"
          >
            <More className="text-gray500" />
            <div
              className={`bg-red600 w-28 h-10 absolute ${
                clickMore ? "visible" : "hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <p className="text-gray600 text-medium16 dark:text-gray400">{details}</p>
    </div>
  );
};
