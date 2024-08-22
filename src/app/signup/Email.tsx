"use client";
import { Arrow } from "@/assets";
import { Button, Buttons, Input } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import React from "react";

function Email() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full py-10 min-h-screen bg-gray50 dark:bg-gray950">
      <div className="w-[540px] h-[700px] flex rounded-3xl flex-col gap-10 p-12 bg-white border border-gray200">
        <div className="flex p-3 w-fit rounded-md border border-gray200 hover:bg-gray50 cursor-pointer">
          <Arrow
            onClick={() => router.back()}
            size={20}
            direction="left"
            className="text-gray600"
          />
        </div>
        <div className="w-full flex flex-col justify-between h-full">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-bold36">회원가입</p>
              <p className="text-medium18 text-gray500">
                이메일 인증을 해주세요.
              </p>
            </div>
            <div className="flex flex-col w-full gap-6">
              <Input placeholder="이메일" title="이메일 입력">
                <div className="flex p-4 text-gray500 text-medium18">
                  @gmail.com
                </div>
              </Input>
            </div>
          </div>
        </div>
        <Buttons onClick={() => router.push("/my")} text="인증코드 보내기" />
      </div>
    </div>
  );
}

export default Email;
