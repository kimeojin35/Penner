"use client";
import { loginHandler } from "@/apis/login";
import { Arrow } from "@/assets";
import { Button, Buttons, Input, ToastPopup } from "@/components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function Login() {
  const [toast, setToast] = useState<boolean>(false);
  const router = useRouter();

  // react-hook-form 설정
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError, // setError로 커스텀 에러 메시지를 설정
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  // 로그인 폼 제출 핸들러
  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    try {
      const response = await loginHandler({ email, password });

      if (response?.data) {
        // 로그인 성공 시 마이페이지 이동
        router.push("/my");
      } else {
        // 로그인 실패 시 setError로 커스텀 에러 메시지 설정
        setError("password", {
          type: "manual",
          message: "이메일 또는 비밀번호가 일치하지 않습니다.",
        });
      }
    } catch (error) {
      setToast(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-10 min-h-screen bg-gray50 dark:bg-gray950">
      <div className="w-[540px] h-[700px] flex rounded-3xl flex-col gap-10 p-12 bg-white border border-gray200">
        <div className="flex p-3 w-fit rounded-md border border-gray200 hover:bg-gray50 cursor-pointer">
          <Arrow size={20} direction="left" className="text-gray600" />
        </div>
        <div className="w-full flex flex-col justify-between h-full">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-bold36">로그인</p>
              <p className="text-medium18 text-gray500">
                Penner에 오신 걸 환영해요.
              </p>
            </div>
            <div className="flex flex-col w-full gap-6">
              {/* 이메일 입력 필드 */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "올바른 이메일 형식을 입력해주세요.",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="이메일"
                    title="이메일"
                    message={errors.email?.message}
                  />
                )}
              />
              {/* 비밀번호 입력 필드 */}
              <Controller
                name="password"
                control={control}
                rules={{ required: "비밀번호를 입력해주세요." }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    password
                    placeholder="비밀번호"
                    title="비밀번호"
                    message={errors.password?.message} // 에러 메시지 표시
                  />
                )}
              />

              <div className="flex gap-1">
                <p className="text-medium16 text-gray600">계정이 없으신가요?</p>
                <p
                  onClick={() => router.push("/signup")}
                  className="text-semibold16 cursor-pointer"
                >
                  회원가입
                </p>
              </div>
            </div>
          </div>
          {/* 로그인 버튼 */}
          <Buttons onClick={handleSubmit(onSubmit)} text="로그인" />
        </div>
      </div>
      {toast && <ToastPopup setToast={setToast} message={"⚠️ 로그인 실패"} />}
    </div>
  );
}

export default Login;
