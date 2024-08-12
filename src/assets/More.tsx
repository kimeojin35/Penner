interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const More = ({ size = 24, className = "", onClick }: PropsType) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
