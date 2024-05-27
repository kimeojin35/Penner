interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Group = ({ size = 24, className = "", onClick }: PropsType) => {
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
        stroke-width="1.5"
        d="M4.653 5.734C4.5 6.102 4.5 6.568 4.5 7.5c0 .931 0 1.397.153 1.765a2 2 0 0 0 1.082 1.082c.368.152.833.152 1.765.152.932 0 1.398 0 1.766-.152a2 2 0 0 0 1.082-1.082c.152-.368.152-.834.152-1.765 0-.932 0-1.398-.153-1.765a2 2 0 0 0-1.082-1.083C8.897 4.5 8.432 4.5 7.5 4.5c-.932 0-1.397 0-1.765.152a2 2 0 0 0-1.082 1.082Zm-.001 9c-.152.368-.152.834-.152 1.766 0 .931 0 1.397.152 1.765a2 2 0 0 0 1.083 1.082c.367.153.833.153 1.765.153.931 0 1.398 0 1.765-.153a2 2 0 0 0 1.083-1.082c.152-.368.152-.834.152-1.765 0-.932 0-1.398-.153-1.765a2 2 0 0 0-1.082-1.082C8.897 13.5 8.432 13.5 7.5 13.5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.082Zm9.001 0c-.153.368-.153.834-.153 1.766 0 .931 0 1.397.153 1.765a2 2 0 0 0 1.082 1.082c.368.153.834.153 1.765.153.932 0 1.398 0 1.766-.153a2 2 0 0 0 1.082-1.082c.152-.368.152-.834.152-1.765 0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.082c-.367-.153-.833-.153-1.765-.153-.931 0-1.397 0-1.765.152a2 2 0 0 0-1.082 1.082Zm1.625-6.013c.659.66.989.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.698-.48 1.357-1.14.658-.658.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.481-.697-1.14-1.356-.66-.66-.989-.988-1.356-1.14a2 2 0 0 0-1.531 0c-.368.152-.697.48-1.356 1.14-.659.659-.988.988-1.14 1.356a2 2 0 0 0 0 1.53c.152.368.481.697 1.14 1.356Z"
      />
    </svg>
  );
};
