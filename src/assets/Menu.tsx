interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Menu = ({ size = 24, className = "", onClick }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 17h14M5 12h14M5 7h14"
      />
    </svg>
  );
};
