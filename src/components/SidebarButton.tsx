import { url } from "inspector";
import React from "react";

interface SidebarPropsType {
  icon?: React.ReactNode;
  className?: string;
  text?: string;
  onClick?: () => void;
  kind?: keyof typeof ButtonColor;
  disabled?: boolean;
  children?: React.ReactNode;
  clicked?: boolean;
}

const ButtonColor = {
  primary: {
    enabled:
      "border dark:border-gray700 border-gray200 dark:text-gray300 hover:bg-gray100 dark:hover:bg-[url('../assets/gradient.png')] dark:hover:text-gray900",
    disabled: "",
  },
  white: {
    enabled: "dark:bg-white dark:hover:bg-gray200 dark:text-black",
    disabled: "",
  },
  silver: {
    enabled:
      "dark:bg-gray800 hover:dark:bg-gray700 dark:text-gray300 bg-gray100 text-gray800",
    disabled: "",
  },
};

export const SidebarButton = ({
  icon,
  className,
  text = "",
  onClick,
  disabled,
  kind = "primary",
  children,
  clicked,
}: SidebarPropsType) => {
  const color = ButtonColor[kind][disabled ? "disabled" : "enabled"];
  return (
    <div
      className={`flex ${
        clicked
          ? "dark:bg-[url('../assets/gradient.png')] dark:text-gray900"
          : ""
      } h-fit w-full rounded-xl text-details16Medium px-5 py-4 ${color} ${className} bg-cover`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 w-full">
        {icon}
        {text}
      </div>
      {children}
    </div>
  );
};
