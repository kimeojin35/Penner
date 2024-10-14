interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const List = ({ size = 24, className, onClick }: PropsType) => {
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
        d="M4.166 14.165h11.667M4.166 10h11.667M4.166 5.832h11.667"
      />
    </svg>
  );
};
