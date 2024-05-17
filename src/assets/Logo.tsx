interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Logo = ({ size = 24, onClick, className = "" }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 40 40"
      onClick={onClick}
      className={``}
    >
      <g clip-path="url(#a)" filter="url(#b)">
        <path
          fill="url(#c)"
          d="M32 20.81a10.86 10.86 0 0 1-1.308.079c-5.898 0-10.678-4.776-10.678-10.667 0-.761.08-1.504.231-2.22A12.666 12.666 0 0 0 20.013 8C13.38 8 8 13.373 8 20s5.379 12 12.014 12c6.362 0 11.57-4.94 11.986-11.19Z"
        />
        <path
          fill="url(#d)"
          fill-opacity=".4"
          d="M32 20.81a10.86 10.86 0 0 1-1.308.079c-5.898 0-10.678-4.776-10.678-10.667 0-.761.08-1.504.231-2.22A12.666 12.666 0 0 0 20.013 8C13.38 8 8 13.373 8 20s5.379 12 12.014 12c6.362 0 11.57-4.94 11.986-11.19Z"
        />
        <path
          fill="#fff"
          d="M30.692 20.889c.443 0 .88-.027 1.308-.08L20.245 8.002a10.697 10.697 0 0 0-.232 2.22c0 5.891 4.781 10.667 10.68 10.667Z"
        />
        <path
          fill="url(#e)"
          fill-opacity=".1"
          d="M30.692 20.889c.443 0 .88-.027 1.308-.08L20.245 8.002a10.697 10.697 0 0 0-.232 2.22c0 5.891 4.781 10.667 10.68 10.667Z"
        />
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="20"
          x2="24.897"
          y1="8"
          y2="36.446"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C24BF5" />
          <stop offset=".33" stop-color="#FF1294" />
          <stop offset=".66" stop-color="#FC6D21" />
          <stop offset="1" stop-color="#FFFE65" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="22.906"
          x2="26.226"
          y1="17.555"
          y2="14.232"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity="0" />
          <stop offset="1" />
        </linearGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(8.74278 9.55456 -9.54482 8.73387 26.243 14.444)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
        <filter
          id="b"
          width="40"
          height="40"
          x="0"
          y="2"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_130_7" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_130_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
