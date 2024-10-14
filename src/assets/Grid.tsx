interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Grid = ({ size = 24, onClick, className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.666 12.501a.833.833 0 1 0 1.667 0 .833.833 0 0 0-1.667 0Zm-5 0a.833.833 0 1 0 1.667 0 .833.833 0 0 0-1.667 0Zm5-5a.833.833 0 1 0 1.667 0 .833.833 0 0 0-1.667 0Zm-5 0a.833.833 0 1 0 1.667 0 .833.833 0 0 0-1.667 0Z"
      />
    </svg>
  );
};
