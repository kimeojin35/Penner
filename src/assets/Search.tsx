interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Search = ({ size = 24, className = "", onClick }: PropsType) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      />
    </svg>
  );
};
