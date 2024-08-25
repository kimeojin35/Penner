import React, { useState } from "react";
import { Arrow } from "@/assets";
import { Buttons, Input } from "@/components";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signUpFormSchema } from "@/utils/signup-form-schema";
import { z } from "zod";

interface SignupProps {
  onNext: () => void;
  onBack?: () => void;
}

function Email({ onNext, onBack }: SignupProps) {
  const [email, setEmail] = useState<string>("");

  const handleNext = () => {
    try {
      signUpFormSchema.parse({ email });
      onNext();
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
              이메일 인증을 해주세요.
            </p>
          </div>
          <div className="flex flex-col w-full gap-6">
            <Input
              onChange={(value) => setEmail(value)}
              placeholder="이메일"
              title="이메일 입력"
            >
              <div className="flex p-4 text-gray500 text-medium18">
                @gmail.com
              </div>
            </Input>
          </div>
        </div>
      </div>
      <Buttons onClick={handleNext} text="인증코드 보내기" />{" "}
    </div>
  );
}

export default Email;
