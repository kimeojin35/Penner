import React from "react";
import GroupSidebar from "./GroupSidebar";
import { Search } from "@/assets";
import GroupCard from "./GroupCard";
import GroupList from "./GroupList";

function Group() {
  return (
    <div className="w-full h-full flex justify-center bg-white dark:bg-gray900 text-black dark:text-white pt-[64px] overflow-auto">
      <div className="w-full max-w-[1400px] flex">
        <GroupSidebar />
        <div className="w-full border-x border-gray200 dark:border-gray700 p-12 gap-9 flex flex-col">
          <div className="flex flex-col w-full gap-6">
            <p className="text-white text-title24Bold">최근 방문한 그룹</p>
            <div className="flex w-full gap-4">
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <p className="text-white text-title24Bold">그룹 추천</p>
            <div className="flex flex-col w-full">
              <GroupList />
              <GroupList />
              <GroupList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
