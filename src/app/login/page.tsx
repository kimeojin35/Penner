"use client";
import { createClient } from "@/utils/supabase/server";
import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray50 dark:bg-gray950">
      <p className="text-medium16 dark:text-white">로그인 페이지</p>
    </div>
  );
}

export default Login;
