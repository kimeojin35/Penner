"use client";
import { Hide, Show } from "@/assets";
import React, { useState } from "react";

interface PropsType {
  placeholder?: string;
  password?: boolean;
  title?: string;
  value?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
}

export const Input = ({
  placeholder,
  password,
  title,
  value,
  children,
  onChange,
}: PropsType) => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-medium16">{title}</p>
      <div className="flex w-full items-center rounded-lg border border-gray300">
        <input
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          type={password && !click ? "password" : "text"}
          placeholder={placeholder}
          className="p-4 placeholder:text-gray300 text-medium18 w-full"
        />
        {password && (
          <div onClick={() => setClick(!click)} className="flex p-4">
            {click ? (
              <Hide className="text-gray700" />
            ) : (
              <Show className="text-gray700" />
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
