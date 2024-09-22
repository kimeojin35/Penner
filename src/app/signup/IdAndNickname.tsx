"use client";
import { Input } from "@/components";
import React from "react";

interface SignupProps {
  onNext?: () => void;
  onBack?: () => void;
}

function IdAndNickname({ onNext, onBack }: SignupProps) {
  return (
    <>
      <Input placeholder="아이디" title="아이디" />
      <Input placeholder="닉네임" title="닉네임" />
    </>
  );
}

export default IdAndNickname;
