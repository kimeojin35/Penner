"use client";
import { Bell, Bookmark, Group, Home, Plus, Star } from "@/assets";
import { SidebarButton } from "@/components/SidebarButton";
import { useRouter } from "next/navigation";
import React from "react";

function GroupSidebar() {
  const router = useRouter();
  return (
    <div className="min-w-[300px] h-fit flex flex-col items-center gap-9 py-9 px-6">
      <SidebarButton
        onClick={() => {
          router.push("/group/create");
        }}
        kind="white"
        text="그룹 생성"
      >
        <Plus className="text-glack" />
      </SidebarButton>
      <div className="h-[1px] w-full bg-gray100 dark:bg-gray800" />
      <div className="flex flex-col w-full gap-3">
        <SidebarButton
          onClick={() => {
            router.push("/group");
          }}
          icon={<Home />}
          text="그룹 찾기"
        />
        <SidebarButton
          onClick={() => {
            router.push("/group/my");
          }}
          icon={<Group />}
          text="내 그룹"
        />
        <SidebarButton
          onClick={() => {
            router.push("/group/news");
          }}
          icon={<Bell />}
          text="내 소식"
        >
          <div className="rounded-full min-w-6 h-6 flex justify-center items-center dark:bg-white bg-gray900 dark:text-black text-white text-details14Medium">
            2
          </div>
        </SidebarButton>
      </div>
      <div className="h-[1px] w-full bg-gray100 dark:bg-gray800" />
      <div className="flex flex-col w-full gap-3">
        <SidebarButton
          onClick={() => {
            router.push("/group/favorite");
          }}
          kind="silver"
          icon={<Star />}
          text="즐겨찾기"
        />
        <SidebarButton
          onClick={() => {}}
          kind="silver"
          icon={<Bookmark />}
          text="그룹"
        />
      </div>
    </div>
  );
}

export default GroupSidebar;
