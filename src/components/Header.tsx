"use client";
import { Logo, Menu, User } from "@/assets";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

interface PropsType {
  onClick?: () => void;
  text: string;
}

const Nav = ({ onClick, text }: PropsType) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col h-full relative items-center justify-between gap-1 cursor-pointer group"
    >
      <div className="h-0.5 w-full" />
      <div className="flex px-2">
        <p className="text-gray800 dark:text-white text-details14Medium">
          {text}
        </p>
      </div>
      <div className="w-full flex">
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r to-purple500 via-pink from-yellow transition-all" />
      </div>
    </div>
  );
};

function Header() {
  const router = useRouter();
  return (
    <div className="w-full absolute top-0 transition-all h-[64px] flex justify-center items-center px-12 border-b border-gray200 dark:border-gray700 bg-white dark:bg-gray900">
      <div className="w-full max-w-[1400px] h-full flex justify-between items-center">
        <div className="hidden sm:flex p-2 hover:rotate-90 transition-all cursor-pointer">
          <Menu className="dark:text-white text-gray800" />
        </div>
        <div className="flex h-full gap-12 items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/main")}
          >
            <Logo size={40} />
            <p className="text-title24Bold text-gray500 dark:text-white">
              Penner
            </p>
          </div>
          <div className="flex items-center gap-4 h-full sm:hidden">
            <Nav text="메인" onClick={() => router.push("/main")} />
            <Nav text="갤러리" onClick={() => router.push("/gallery")} />
            <Nav text="챌린지" onClick={() => router.push("/challenge")} />
            <Nav text="그룹" onClick={() => router.push("/group")} />
          </div>
        </div>
        <div className="flex gap-3 items-center sm:hidden">
          <Button kind="primary" fontSize="small">
            로그인
          </Button>
          <Button kind="white" fontSize="small">
            시작하기
          </Button>
        </div>
        <div className="hidden sm:flex p-2 cursor-pointer">
          <User className="dark:text-white text-gray800" />
        </div>
      </div>
    </div>
  );
}

export default Header;
