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
  Moon,
  Plus,
  Sun,
  User,
  Wavy_Check,
} from "@/assets";
import { Button } from ".";
import useDarkMode from "@/hooks/useDarkMode";

export function Navbar() {
  const [dark, toggleDarkMode] = useDarkMode();
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState<number>(0);
  const [visibleNavbar, setVisibleNavbar] = useState<boolean>(true);

  const navList = [
    { icon: Home, route: "/main" },
    { icon: Image, route: "/gallery" },
    { icon: Wavy_Check, route: "/challenge" },
    { icon: Group, route: "/group" },
    { icon: Bell, route: "/notifications" },
  ];

  const [browserHeight, setBrowserHeight] = useState<number>(0);

  useEffect(() => {
    const updateBrowserHeight = () => {
      setBrowserHeight(window.innerHeight);
    };

    updateBrowserHeight();
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
    <>
      {!visibleNavbar && (
        <div className="box-border fixed z-50 w-20 h-screen peer top-6" />
      )}
      <header
        style={{
          height: `calc(${browserHeight}px - 48px)`,
        }}
        className={`transition-all duration-300 box-border z-50 top-6 fixed h-screen bg-white dark:bg-[#121214] border border-gray200 dark:border-gray800 w-20 rounded-xl flex flex-col items-center py-6 justify-between ${
          visibleNavbar ? "left-6" : "-left-20 peer-hover:left-6 hover:left-6"
        }`}
      >
        <div className="flex flex-col items-center w-full gap-16">
          <Logo />
          <div className="relative flex flex-col items-center w-full gap-1">
            <div
              className="w-0.5 h-6 bg-pink500 dark:bg-white absolute left-0 transition-all"
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
                    ? "text-pink600 dark:text-white"
                    : "text-gray500"
                } transition-all cursor-pointer hover:text-pink600 hover:dark:text-white justify-center items-center px-7 py-4`}
              >
                <Icon clicked={click === index} />
              </div>
            ))}
            <div className="h-[1px] w-9 bg-gray200 dark:bg-gray800" />
            <div
              onClick={() => router.push("/login")}
              className="flex items-center cursor-pointer justify-center w-full py-4"
            >
              <User className="text-gray500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button>
            <Plus className="text-white" />
          </Button>
          <div
            onClick={toggleDarkMode}
            className="flex items-center cursor-pointer justify-center w-full py-4"
          >
            {dark ? (
              <Moon className="text-gray500" />
            ) : (
              <Sun className="text-gray500" />
            )}
          </div>
          <Chevron_Arrow
            onClick={() => setVisibleNavbar(!visibleNavbar)}
            className={`${
              visibleNavbar ? "" : "rotate-180"
            } text-gray400 dark:text-gray600 transition-all`}
          />
        </div>
      </header>
    </>
  );
}
