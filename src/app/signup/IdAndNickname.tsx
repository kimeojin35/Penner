"use client";
import { Arrow } from "@/assets";
import { Button, Buttons, Input } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import React from "react";

interface SignupProps {
  onNext?: () => void;
  onBack?: () => void;
}

function IdAndNickname({ onNext, onBack }: SignupProps) {
  const router = useRouter();
  return (
      <div className="w-[540px] h-[700px] flex rounded-3xl flex-col gap-10 p-12 bg-white border border-gray200">
        <div
          onClick={onBack}
          className="flex p-3 w-fit rounded-md border border-gray200 hover:bg-gray50 cursor-pointer"
        >
          <Arrow size={20} direction="left" className="text-gray600" />
        </div>
        <div className="w-full flex flex-col justify-between h-full">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-bold36">회원가입</p>
              <p className="text-medium18 text-gray500">
                사용할 아이디와 닉네임을 입력해주세요.
              </p>
            </div>
            <div className="flex flex-col w-full gap-6">
              <Input placeholder="아이디" title="아이디 입력" />
              <Input placeholder="닉네임" title="닉네임 입력" />
            </div>
          </div>
        </div>
        <Buttons onClick={onNext} text="다음" />
      </div>
  );
}

export default IdAndNickname;
