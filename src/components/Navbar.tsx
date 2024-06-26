"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Bell,
  Chevron_Arrow,
  Group,
  Home,
  Image,
  Logo,
  Plus,
  User,
  Wavy_Check,
} from "@/assets";
import { Button } from ".";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState<number>(0);

  const navList = [
    { icon: Home, route: "/main" },
    { icon: Image, route: "/gallery" },
    { icon: Wavy_Check, route: "/challenge" },
    { icon: Group, route: "/group" },
    { icon: Bell, route: "/notifications" },
  ];

  const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

  const updateBrowserHeight = () => {
    setBrowserHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateBrowserHeight);
    return () => window.removeEventListener("resize", updateBrowserHeight);
  }, []);

  useEffect(() => {
    const currentIndex = navList.findIndex((item) => item.route === pathname);
    if (currentIndex !== -1) {
      setClick(currentIndex);
    }
  }, [pathname]);

  return (
    <div
      style={{
        height: `calc(${browserHeight}px - 48px)`,
      }}
      className="box-border top-6 left-6 absolute h-screen bg-white dark:bg-[#121214] border border-gray200 dark:border-gray800 w-20 rounded-xl flex flex-col items-center py-6 justify-between"
    >
      <div className="flex flex-col items-center w-full gap-16">
        <Logo />
        <div className="relative flex flex-col items-center w-full gap-1">
          <div
            className="w-0.5 h-6 bg-gray900 dark:bg-white absolute left-0 transition-all"
            style={{ top: `${click * 60 + 16}px` }}
          />
          {navList.map(({ icon: Icon, route }, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(route);
                setClick(index);
              }}
              className={`flex ${
                click === index
                  ? "text-gray900 dark:text-white"
                  : "text-gray500"
              } transition-all hover:text-gray900 hover:dark:text-white justify-center items-center px-7 py-4`}
            >
              <Icon clicked={click === index} />
            </div>
          ))}
          <div className="h-[1px] w-9 bg-gray200 dark:bg-gray800" />
          <div className="flex items-center justify-center w-full py-4">
            <User className="text-gray500" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button children={<Plus className="text-white" />} />
        <Chevron_Arrow className="text-gray400 dark:text-gray600" />
      </div>
    </div>
  );
}

export default Navbar;
