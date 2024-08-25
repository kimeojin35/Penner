import React from "react";

interface ButtonsType {
  icons?: React.ReactNode;
  text?: string;
  className?: string;
  style?: "primary" | "white" | "silver";
  onClick?: () => void;
}

export const Buttons = ({
  icons,
  text,
  style = "primary",
  onClick,
  className = "",
}: ButtonsType) => {
  const buttonStyle = {
    primary: "bg-gray950 text-white hover:bg-black",
    white: "border border-gray300 bg-white text-black hover:bg-gray50",
    silver: "text-black bg-gray100 hover:bg-gray200",
  };
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer justify-center items-center transition-all h-14 flex p-4 w-full text-medium18 rounded-lg ${buttonStyle[style]} ${className}`}
    >
      {icons}
      {text}
    </button>
  );
};
