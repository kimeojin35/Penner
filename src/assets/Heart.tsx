interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  clicked?: boolean;
}

export const Heart = ({
  size = 24,
  onClick,
  className = "",
  clicked,
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
        fill={clicked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 7.693C10 3 3 3.5 3 9.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
      />
    </svg>
  );
};
