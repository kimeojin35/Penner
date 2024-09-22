"use client";
import { useState } from "react";
import Email from "./Email";
import EmailCode from "./EmailCode";
import IdAndNickname from "./IdAndNickname";
import Password from "./Password";
import { Arrow } from "@/assets";
import { Buttons } from "@/components";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  const signupPage = [
    {
      page: <Email onNext={nextStep} />,
      details: "이메일을 입력해주세요.",
      buttonText: "인증코드 보내기",
    },
    {
      page: <EmailCode onNext={nextStep} onBack={prevStep} />,
      details: "이메일 인증코드를 입력해주세요.",
      buttonText: "다음",
    },
    {
      page: <IdAndNickname onNext={nextStep} onBack={prevStep} />,
      details: "",
      buttonText: "다음",
    },
    {
      page: <Password onBack={prevStep} />,
      details: "비밀번호를 설정해주세요.",
      buttonText: "다음",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full py-10 min-h-screen bg-gray50 dark:bg-gray950">
      <div className="w-[540px] h-[700px] flex rounded-3xl flex-col gap-10 p-12 bg-white border border-gray200">
        <div
          onClick={() => prevStep()}
          className="flex p-3 w-fit rounded-md border border-gray200 hover:bg-gray50 cursor-pointer"
        >
          <Arrow size={20} direction="left" className="text-gray600" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-bold36">회원가입</p>
          <p className="text-medium18 text-gray500">
            {signupPage[step].details}
          </p>
        </div>
        <div className="w-full flex flex-col justify-between h-full">
          {signupPage[step].page}
        </div>
      </div>
    </div>
  );
}

export default Signup;
