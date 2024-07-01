interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Slider = ({ size = 24, onClick, className = "" }: PropsType) => {
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
        d="M14 15h7M3 15h2m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm15-6h1M3 9h7m6.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
};
