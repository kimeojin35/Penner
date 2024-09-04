"use client";
import { Discord, Github, Instagram, Logo } from "@/assets";
import { useRouter } from "next/navigation";
import React from "react";

export const Footer = () => {
  const router = useRouter();
  const details = [
    { title: "개발자", content: ["김어진"] },
    { title: "기술 스택", content: ["Next.js", "TailwindCSS", "Recoil"] },
    { title: "이용약관", content: ["운영정책", "문의사항"] },
    {
      title: "ABOUT",
      content: ["블로그", "포트폴리오", "공부정리 노션", "다른 프로젝트"],
    },
  ];

  const info = [
    { title: "연락처", content: "010-5801-4871" },
    { title: "이메일", content: "ojinikim@gmail.com" },
    { title: "주소", content: "대덕소프트웨어마이스터고등학교" },
  ];

  const link = [
    { icon: <Instagram size={28} />, url: "https://github.com/kimeojin35" },
    { icon: <Discord size={28} />, url: "https://github.com/kimeojin35" },
    { icon: <Github size={28} />, url: "https://github.com/kimeojin35" },
  ];
  return (
    <div className="w-full pt-6 bg-gray950 flex justify-center items-center pr-6 pl-28">
      <div className="w-full max-w-[1440px] flex flex-col gap-24 p-6">
        <div className="w-full justify-between flex gap-16 md:flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <Logo size={40} />
              <p className="text-white text-bold32">Penner</p>
            </div>
            <div className="flex gap-2">
              {link.map(({ icon, url }, index) => (
                <a
                  key={index}
                  type="button"
                  href={`${url}`}
                  className="flex p-1 text-gray500 hover:text-white transition-all cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-end">
            {details.map(({ title, content }, index) => (
              <div
                key={index}
                className="flex flex-col w-full max-w-[230px] gap-2"
              >
                <p className="text-white text-semibold16">{title}</p>
                {content.map((text, idx) => (
                  <p key={idx} className="text-gray500 text-medium16">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-5 w-full items-center py-4 border-b border-b-gray800">
            <div className="flex items-center relative w-full">
              {info.map(({ title, content }, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 max-w-[230px] w-full"
                >
                  <p className="text-medium12 text-gray500">{title}</p>
                  <p className="text-medium14 text-white">{content}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push("/signup")}
              className="rounded-full hover:bg-gray200 bg-white text-gray950 text-medium16 px-6 py-3 whitespace-nowrap"
            >
              회원가입
            </button>
          </div>
          <div className="w-full justify-between flex">
            <p className="text-gray600 text-medium12 w-fit">© 2024 — Penner</p>
            <p className="text-gray600 text-medium12 w-fit">made by Eojin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
