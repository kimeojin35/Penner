import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  kind?: keyof typeof ButtonColor;
  icon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  fontSize?: keyof typeof FontSize;
  onClick?: () => void;
}

const ButtonColor = {
  primary: {
    enabled:
      "transition-all bg-gray900 text-white hover:bg-gray900 active:bg-black",
    disabled: "bg-gray400 text-gray200",
  },
  primary2: {
    enabled:
      "transition-all bg-white text-gray800 hover:bg-gray50 active:bg-gray100 border border-gray300",
    disabled: "bg-gray100 text-gray300",
  },
  white: {
    enabled:
      "transition-all bg-white text-gray800 hover:bg-gray50 active:bg-gray100",
    disabled: "bg-transparent text-gray200",
  },
  silver: {
    enabled:
      "transition-all bg-gray100 text-gray800 hover:bg-gray200 active:bg-gray300",
    disabled: "bg-gray100 text-gray300",
  },
  gray: {
    enabled: "transition-all bg-gray700 hover:bg-gray600 text-white",
    disabled: "",
  },
  danger: {
    enabled:
      "transition-all bg-transparent text-red500 hover:bg-red600 active:bg-red700",
    disabled: "bg-gray400 text-gray200",
  },
  danger2: {
    enabled:
      "transition-all bg-red50 text-red500 hover:bg-red100 hover:text-red600 active:bg-red200",
    disabled: "bg-gray100 text-gray300",
  },
  danger3: {
    enabled:
      "transition-all bg-red500 text-white hover:bg-red600 hover:text-white active:bg-red700",
    disabled: "bg-gray800 text-gray600",
  },
};

const FontSize = {
  large: "text-title20Medium",
  medium: "text-details16Medium",
  small: "text-details14Medium",
};

export const Button = ({
  className,
  kind = "primary",
  icon,
  disabled,
  children,
  fontSize,
  onClick,
}: ButtonProps) => {
  const color = ButtonColor[kind][disabled ? "disabled" : "enabled"];
  const font = FontSize[fontSize ?? "large"];
  return (
    <button
      className={`select-none w-fit px-3 py-2 gap-2 flex items-center justify-center ${
        children ? "rounded-lg" : "rounded-full"
      } ${color} ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children && <span className={`${font}`}>{children}</span>}
    </button>
  );
};
