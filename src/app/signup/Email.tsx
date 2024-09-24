import React from "react";
import { Input } from "@/components";
import { SignupProps } from "@/interfaces";
import { Controller } from "react-hook-form";

function Email({ control, errors }: SignupProps) {
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: "이메일을 입력해주세요.",
        pattern: {
          value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "이메일 형식에 맞지 않습니다.",
        },
      }}
      render={({ field: { onChange, value } }) => (
        <Input
          onChangeText={onChange}
          value={value}
          placeholder="이메일 입력"
          title="이메일"
          message={errors.email?.message}
        />
      )}
    />
  );
}

export default Email;
