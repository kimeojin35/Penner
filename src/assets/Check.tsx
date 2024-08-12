interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Check = ({ size = 24, className = "", onClick }: PropsType) => {
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
        d="m6 12 4.243 4.243 8.484-8.485"
      />
    </svg>
  );
};
