interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const FileUpload = ({ size = 24, onClick, className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 49"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24 36.5v-12m0 0-6 4m6-4 6 4M26 6.502c-.191-.002-.405-.002-.65-.002H16.4c-2.24 0-3.36 0-4.216.436a3.998 3.998 0 0 0-1.748 1.748C10 9.539 10 10.66 10 12.9v23.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.854.436 1.974.436 4.21.436h15.212c2.236 0 3.354 0 4.209-.435a4.006 4.006 0 0 0 1.75-1.75c.435-.854.435-1.972.435-4.208V19.151c0-.245 0-.46-.002-.651M26 6.502c.571.005.933.026 1.278.109a4 4 0 0 1 1.156.479c.403.247.75.594 1.441 1.285l6.251 6.251c.692.692 1.036 1.037 1.283 1.44.22.358.382.748.48 1.157.082.345.104.706.11 1.277M26 6.502V12.1c0 2.24 0 3.36.436 4.215a4.002 4.002 0 0 0 1.748 1.75c.854.435 1.974.435 4.21.435h5.604m0 0H38"
      />
    </svg>
  );
};
