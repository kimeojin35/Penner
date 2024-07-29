interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  direction?: "left" | "top" | "right" | "bottom";
}

export const Arrow = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}: PropsType) => {
  const rotate = {
    right: "rotate-[0deg]",
    bottom: "rotate-[90deg]",
    left: "rotate-[180deg]",
    top: "rotate-[270deg]",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m9 19 7-7-7-7"
      />
    </svg>
  );
};
