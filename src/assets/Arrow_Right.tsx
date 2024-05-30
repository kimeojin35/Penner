interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Arrow_Right = ({
  size = 24,
  className = "",
  onClick,
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        d="M15.54 11.29 9.88 5.64a1 1 0 1 0-1.42 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"
      />
    </svg>
  );
};
