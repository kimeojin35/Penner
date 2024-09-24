"use client";
import { Buttons, Input } from "@/components";
import { SignupProps } from "@/interfaces";
import React from "react";
import { Controller } from "react-hook-form";

function IdAndNickname({ control, errors }: SignupProps) {
  return (
    <>
      <Controller
        control={control}
        name="id"
        rules={{
          required: "아이디를 입력해주세요.",
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: "영어와 숫자만 사용 가능합니다.",
          },
          minLength: { value: 4, message: "아이디는 최소 4자여야 합니다." },
          maxLength: {
            value: 20,
            message: "아이디는 최대 20자까지 입력 가능합니다.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            message={errors.id?.message}
            placeholder="아이디"
            title="아이디"
          />
        )}
      />
      <Controller
        name="nickname"
        control={control}
        rules={{ required: "닉네임을 입력해주세요." }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            message={errors.nickname?.message}
            placeholder="닉네임"
            title="닉네임"
          />
        )}
      />
    </>
  );
}

export default IdAndNickname;
