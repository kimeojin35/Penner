/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/assets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      gray900: "#18181B",
      gray800: "#27272A",
      gray700: "#3F3F46",
      gray600: "#52525B",
      gray500: "#71717A",
      gray400: "#A1A1AA",
      gray300: "#D4D4D8",
      gray200: "#E4E4E7",
      gray100: "#F4F4F5",
      gray50: "#FAFAFA",

      red900: "#7F1D1D",
      red800: "#991B1B",
      red700: "#B91C1C",
      red600: "#DC2626",
      red500: "#EF4444",
      red400: "#F87171",
      red300: "#FCA5A5",
      red200: "#FECACA",
      red100: "#FEE2E2",
      red50: "#FEF2F2",

      green900: "#14532D",
      green800: "#166534",
      green700: "#15803D",
      green600: "#16A34A",
      green500: "#22C55E",
      green400: "#4ADE80",
      green300: "#86EFAC",
      green200: "#BBF7D0",
      green100: "#DCFCE7",
      green50: "#F0FDF4",

      blue900: "#621778",
      blue800: "#741593",
      blue700: "#8B16B5",
      blue600: "#A41FDA",
      blue500: "#C24CF6",
      blue400: "#D474FE",
      blue300: "#E3A8FF",
      blue200: "#EDCEFF",
      blue100: "#F6E7FF",
      blue50: "#FBF4FF",

      black: "#000000",
      white: "#FFFFFF",

      transparent: "transparent",
      current: "currentColor",
    },

    fontSize: {
      head48Bold: [
        "48px",
        {
          fontWeight: 700,
          lineHeight: "58px",
        },
      ],
      head40Bold: [
        "40px",
        {
          fontWeight: 700,
          lineHeight: "48px",
        },
      ],
      header36Bold: [
        "36px",
        {
          fontWeight: 700,
          lineHeight: "44px",
        },
      ],
      header32Bold: [
        "32px",
        {
          fontWeight: 700,
          lineHeight: "38px",
        },
      ],
      title28Medium: [
        "28px",
        {
          fontWeight: 500,
          lineHeight: "34px",
        },
      ],
      title24Medium: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "28px",
        },
      ],
      title24Bold: [
        "24px",
        {
          fontWeight: 700,
          lineHeight: "28px",
        },
      ],
      title20Medium: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      title20Bold: [
        "20px",
        {
          fontWeight: 700,
          lineHeight: "24px",
        },
      ],
      details18Medium: [
        "18px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      details18Bold: [
        "18px",
        {
          fontWeight: 700,
          lineHeight: "22px",
        },
      ],
      details16Medium: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      details16Bold: [
        "16px",
        {
          fontWeight: 700,
          lineHeight: "20px",
        },
      ],
      details14Medium: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "16px",
        },
      ],
      details14Bold: [
        "14px",
        {
          fontWeight: 700,
          lineHeight: "16px",
        },
      ],
      bodyTiny: [
        "12px",
        {
          fontWeight: 500,
          lineHeight: "16px",
        },
      ],
    },

    screens: {
      sm: { max: "719px" },
      md: { min: "720px", max: "1419px" },
      lg: { min: "1420px" },
    },
  },
  plugins: [],
};
