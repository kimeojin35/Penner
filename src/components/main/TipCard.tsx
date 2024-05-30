import React from "react";
import Tag from "./Tag";

function TipCard() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full aspect-video rounded-xl border border-gray200 bg-gray100 flex justify-center items-center hover:-translate-y-2 transition-all">
        <p className="text-gray300 text-header36Bold">Penner</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-black text-title20Bold">
          네 가지 요소를 그리는 방법
        </p>
        <p className=" text-gray500 text-details16Medium w-full line-clamp-2 overflow-ellipsis">
          물, 불, 흙, 공기의 네 가지 주요 자연 요소를 디지털 방식으로 그리는
          방법을 설명합니다. 어쩌고 저쩌고 쓸 말이 없는
        </p>
      </div>
      <div className="w-full gap-1 flex">
        <Tag text="컨셉 아트" />
        <Tag text="클튜" />
        <Tag text="디지털 드로잉" />
      </div>
    </div>
  );
}

export default TipCard;
