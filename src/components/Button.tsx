"use client";
import useDarkMode from "@/hooks/useDarkMode";
import React, { useState } from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  clicked?: boolean;
}

export const Button = ({
  className = "",
  children,
  onClick,
  clicked,
}: ButtonProps) => {
  const [dark, toggleDarkMode] = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackground = "transparent";
  const hoverBackground =
    "radial-gradient(80.22% 80.22% at 72.92% 80.21%, #FD863A 0%, rgba(253, 134, 58, 0.00) 100%), #FF27AE";

  return (
    <div
      onClick={onClick}
      className={`p-3 ${className} cursor-pointer rounded-full flex transition-all border border-gray200 hover:bg-gray50 dark:border-gray800 dark:hover:bg-gray900`}
      style={{
        background: clicked ? defaultBackground : hoverBackground,
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};
