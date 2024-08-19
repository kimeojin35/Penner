import { Show } from "@/assets";
import React from "react";

interface PropsType {
  placeholder?: string;
  type: string;
  password?: boolean;
  title?: string;
}

export const Input = ({ placeholder, type, password, title }: PropsType) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-bold14">{title}</p>
      <div className="flex w-full items-center rounded-lg border border-gray300">
        <input
          type={type}
          placeholder={placeholder}
          className="p-4 placeholder:text-gray300"
        />
        {password ? (
          <div className="flex p-4">
            <Show className="text-gray700" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
