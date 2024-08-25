"use client";
import { Arrow } from "@/assets";
import { Button, Buttons, Input } from "@/components";
import { signUpFormSchema } from "@/utils/signup-form-schema";
import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

interface SignupProps {
  onNext?: any;
  onBack?: any;
}

function Password({ onNext, onBack }: SignupProps) {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handleNext = () => {
    const data = {
      id: "",
      nickname: "",
      email: "",
      emailCode: "",
      password,
      passwordCheck,
    };

    try {
      signUpFormSchema.parse(data);
      router.push("/my");
    } catch (e) {
      if (e instanceof z.ZodError) {
        console.error(e.errors);
        alert(e.errors[0]?.message || "유효성 검사 실패");
      }
    }
  };

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
              비밀번호를 설정해주세요.
            </p>
          </div>
          <div className="flex flex-col w-full gap-6">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              title="비밀번호 입력"
            />
            <Input
              onChange={(e) => setPasswordCheck(e.target.value)}
              placeholder="비밀번호 확인"
              title="비밀번호 재입력"
            />
          </div>
        </div>
      </div>
      <Buttons onClick={onNext} text="다음" />
    </div>
  );
}

export default Password;
