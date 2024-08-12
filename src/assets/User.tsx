interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const User = ({ size = 24, className = "", onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.217 19.332A6.982 6.982 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </svg>
  );
};
