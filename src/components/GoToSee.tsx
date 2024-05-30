import { Arrow_Right } from "@/assets";
import React from "react";

interface PropsType {
  text?: string;
  onClick?: () => void;
}

export function GoToSee({ text, onClick }: PropsType) {
  return (
    <div
      className="flex items-center gap-2 group cursor-pointer"
      onClick={onClick}
    >
      <p className="text-gray500 text-details16Bold group-hover:text-gray900 transition-all">
        {text}
      </p>
      <Arrow_Right
        className="text-gray500 group-hover:translate-x-1 transition-all group-hover:text-gray900"
        size={20}
      />
    </div>
  );
}
