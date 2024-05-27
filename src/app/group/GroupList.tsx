import React from "react";

const GroupList = () => {
  return (
    <div className="w-full items-center flex gap-5 py-6 border-b border-gray800">
      <div className="w-[90px] h-[90px] rounded-3xl bg-white" />
      <div className="w-full flex flex-col gap-2.5">
        <p className="w-full text-white text-title20Bold">그림 그리는 그룹</p>
        <p className="w-full line-clamp-1 text-ellipsis text-gray400">
          세상의 모든 사림이 행복해질 수 있는 그림을 그리는 취미반 모임입니다~^^
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
    </div>
  );
};

export default GroupList;
