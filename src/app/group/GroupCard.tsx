import { Button } from "@/components/Button";
import React from "react";

interface GroupCard {
  groupName: string;
  details?: string;
  onClick: () => void;
}

const GroupCard = () => {
  return (
    <div className="w-[240px] flex rounded-2xl flex-col bg-gray800 overflow-hidden hover:-translate-y-2 transition-all">
      <div className="w-full h-[120px] bg-gray300 relative">
        <div className="absolute h-[64px] w-[64px] border-gray800 border-[5px] bg-gray300 rounded-2xl -bottom-4 right-5" />
      </div>
      <div className="w-full flex flex-col gap-4 p-4 bg-gray800">
        <div className="flex flex-col gap-1.5">
          <p className="text-white text-details18Bold w-full line-clamp-1 text-ellipsis">
            그림 그리는 그룹
          </p>
          <p className="text-gray400 text-details16Medium h-10 line-clamp-2 text-ellipsis">
            세상의 모든 사림이 행복해질 수 있는 그림을 그리는 취미반
            모임입니다~^^
          </p>
          <div className="w-full flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <p className="text-gray300 text-details14Medium">멤버</p>
              <p className="text-gray300 text-details14Medium">126명</p>
            </div>
            <div className="w-[1px] h-3 rounded-full bg-gray600" />
            <div className="flex items-center gap-1">
              <p className="text-gray300 text-details14Medium">그림</p>
              <p className="text-gray300 text-details14Medium">49개</p>
            </div>
          </div>
        </div>
        <Button kind="gray" fontSize="small" className="w-full h-9">
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default GroupCard;
