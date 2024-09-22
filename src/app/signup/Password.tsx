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
    <>
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
    </>
  );
}

export default Password;
