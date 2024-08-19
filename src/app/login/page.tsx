"use client";
import { Arrow } from "@/assets";
import { Button } from "@/components";
import { createClient } from "@/utils/supabase/server";
import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray50 dark:bg-gray950">
      <div className="w-[540px] flex rounded-3xl flex-col gap-6 px-12 py-12 bg-white border border-gray200">
        <div className="flex p-4 w-fit rounded-md border border-gray200">
          <Arrow size={20} direction="left" className="text-gray600" />
        </div>
        <div className="w-full flex flex-col gap-32">
          <div className="w-full flex flex-col gap-20">
            <div className="flex flex-col gap-3">
              <p className="text-bold36">로그인</p>
              <p className="text-medium18 text-gray500">
                Penner에 오신 걸 환영해요.
              </p>
            </div>
            <div className="flex flex-col w-full gap-6">
              
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Login;
