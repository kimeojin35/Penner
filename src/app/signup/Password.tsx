"use client";
import { Input } from "@/components";
import { SignupProps } from "@/interfaces";
import React from "react";
import { Controller, useWatch } from "react-hook-form";

function Password({ control, errors }: SignupProps) {
  const password = useWatch({
    control,
    name: "password",
  });

  return (
    <>
      <Controller
        name="password"
        control={control}
        rules={{
          required: "비밀번호를 입력해주세요.",
          pattern: {
            value: /^(?=.*[!@#$%^&*])/,
            message: "특수문자 1자 이상 포함해야 합니다.",
          },
          minLength: {
            value: 8,
            message: "비밀번호는 최소 8자여야 합니다.",
          },
          maxLength: {
            value: 32,
            message: "비밀번호는 최대 32자까지 가능합니다.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="비밀번호"
            value={value}
            title="비밀번호 입력"
            message={errors.password?.message}
            password
          />
        )}
      />
      <Controller
        name="passwordCheck"
        control={control}
        rules={{
          required: "비밀번호를 확인해주세요.",
          validate: (value) =>
            value === password || "비밀번호가 일치하지 않습니다.",
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="비밀번호 확인"
            value={value}
            title="비밀번호 재입력"
            message={errors.passwordCheck?.message}
            password
          />
        )}
      />
    </>
  );
}

export default Password;
