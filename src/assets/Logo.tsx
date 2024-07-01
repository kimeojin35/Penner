interface PropsType {
  size?: number;
}

export const Logo = ({ size = 40 }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 40 40"
    >
      <g clip-path="url(#a)" filter="url(#b)">
        <path
          fill="url(#c)"
          d="M34 20.945c-.5.06-1.01.092-1.526.092-6.88 0-12.458-5.571-12.458-12.444 0-.889.093-1.755.27-2.59L20.016 6C12.275 6 6 12.268 6 20s6.275 14 14.016 14C27.439 34 33.514 28.236 34 20.945Z"
        />
        <path
          fill="url(#d)"
          fill-opacity=".4"
          d="M34 20.945c-.5.06-1.01.092-1.526.092-6.88 0-12.458-5.571-12.458-12.444 0-.889.093-1.755.27-2.59L20.016 6C12.275 6 6 12.268 6 20s6.275 14 14.016 14C27.439 34 33.514 28.236 34 20.945Z"
        />
        <path
          fill="#fff"
          d="M32.474 21.035c.517 0 1.026-.032 1.526-.093L20.286 6c-.177.835-.27 1.702-.27 2.59 0 6.873 5.577 12.445 12.458 12.445Z"
        />
        <path
          fill="url(#e)"
          fill-opacity=".1"
          d="M32.474 21.035c.517 0 1.026-.032 1.526-.093L20.286 6c-.177.835-.27 1.702-.27 2.59 0 6.873 5.577 12.445 12.458 12.445Z"
        />
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="20"
          x2="25.713"
          y1="6"
          y2="39.187"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C24BF5" />
          <stop offset=".33" stop-color="#FF1294" />
          <stop offset=".66" stop-color="#FC6D21" />
          <stop offset="1" stop-color="#FFFE65" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="23.39"
          x2="27.263"
          y1="17.146"
          y2="13.268"
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
          gradientTransform="matrix(10.19992 11.147 -11.13563 10.18953 27.283 13.518)"
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
          width="46.667"
          height="46.667"
          x="-3.333"
          y="-1"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.333" />
          <feGaussianBlur stdDeviation="4.667" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_630_5202"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_630_5202"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
