interface PropsType {
  size?: number;
  className?: string;
  onClick?: () => void;
  clicked?: boolean;
}

export const Home = ({
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
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        fill={clicked ? "currentColor" : ""}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 11.45v5.35c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.874C20 18.48 20 17.92 20 16.802v-5.351c0-.535 0-.802-.065-1.05a1.998 1.998 0 0 0-.28-.618c-.145-.212-.345-.389-.748-.74l-4.8-4.2c-.746-.654-1.12-.98-1.54-1.105-.37-.11-.764-.11-1.135 0-.42.125-.792.45-1.538 1.103L5.093 9.042c-.402.352-.603.529-.747.741a1.999 1.999 0 0 0-.281.617C4 10.65 4 10.916 4 11.45Z"
      />
    </svg>
  );
};
