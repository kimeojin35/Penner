import React, { useState } from "react";
import { Buttons, Input } from "@/components";
import { emailSchema } from "@/utils/signup-form-schema";
import { z } from "zod";

interface SignupProps {
  onNext: () => void;
  onBack?: () => void;
}

function Email({ onNext }: SignupProps) {
  const [email, setEmail] = useState<string>("");

  const handleNext = () => {
    try {
      emailSchema.parse({ email });
      onNext();
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errorMessage = e.errors[0]?.message || "유효성 검사 실패";
        alert(errorMessage);
      }
    }
  };

  return (
    <>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="이메일을 입력하세요"
        title="이메일 입력"
      />
      <Buttons onClick={handleNext} text="인증코드 보내기" />
    </>
  );
}

export default Email;
