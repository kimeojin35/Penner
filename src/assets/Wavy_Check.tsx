interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
  clicked?: boolean;
}

export const Wavy_Check = ({
  size = 24,
  className = "",
  onClick,
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
      className={`${onClick ? "cursor-default" : ""} ${className}`}
    >
      <path
        fill={clicked ? "currentColor" : ""}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m14.467 4.5-1.221-1.041a1.921 1.921 0 0 0-2.492 0l-1.221 1.04a1.92 1.92 0 0 1-1.093.453l-1.598.127A1.922 1.922 0 0 0 5.08 6.841l-.128 1.6c-.032.402-.19.784-.451 1.092L3.46 10.754a1.92 1.92 0 0 0 0 2.491l1.04 1.222c.262.307.421.69.453 1.092l.128 1.6a1.92 1.92 0 0 0 1.76 1.761l1.6.128c.403.032.786.19 1.093.452l1.22 1.04a1.921 1.921 0 0 0 2.493 0l1.22-1.04a1.92 1.92 0 0 1 1.094-.452l1.6-.128a1.92 1.92 0 0 0 1.76-1.762l.128-1.599c.032-.403.19-.785.453-1.093l1.04-1.22a1.92 1.92 0 0 0 0-2.492l-1.04-1.22a1.922 1.922 0 0 1-.454-1.094l-.127-1.6a1.92 1.92 0 0 0-1.762-1.76l-1.599-.128a1.92 1.92 0 0 1-1.092-.453Z"
      />
      <path
        className={clicked ? "dark:text-gray900 text-white" : ""}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 10-4 4-2-2"
      />
    </svg>
  );
};
