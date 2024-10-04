"use client";
import { useState } from "react";
import Email from "./Email";
import IdAndNickname from "./IdAndNickname";
import Password from "./Password";
import { Arrow } from "@/assets";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Buttons } from "@/components";
import { signupHandler } from "@/apis/signup";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      id: "",
      nickname: "",
      password: "",
      passwordCheck: "",
    },
  });

  const router = useRouter();
  const [step, setStep] = useState<number>(0);

  const signupPage = [
    {
      page: <Email control={control} errors={errors} />,
      details: "이메일을 입력해주세요.",
    },
    {
      page: <IdAndNickname control={control} errors={errors} />,
      details: "아이디와 닉네임을 입력해주세요.",
    },
    {
      page: <Password control={control} errors={errors} />,
      details: "비밀번호를 설정해주세요.",
    },
  ];

  const nextPage = handleSubmit(async (data) => {
    if (step < signupPage.length - 1) {
      setStep(step + 1);
    } else {
      signupHandler(router, data);
    }
    console.log(data);
  });

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
    else router.back();
  };

  return (
    <div className="flex items-center justify-center w-full py-10 min-h-screen bg-gray50 dark:bg-gray950">
      <div className="w-[540px] h-[700px] flex rounded-3xl flex-col gap-10 p-12 bg-white border border-gray200">
        <div
          onClick={prevStep}
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
          <div className="w-full flex flex-col gap-6">
            {signupPage[step].page}
          </div>
          <Buttons
            onClick={nextPage}
            text={step < signupPage.length - 2 ? "다음" : "완료"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
