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
      gray950: "#09090B",
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

      pink900: "#98034D",
      pink800: "#B8005A",
      pink700: "#DF006C",
      pink600: "#FF1493",
      pink500: "#FF27AE",
      pink400: "#FF58C7",
      pink300: "#FF98DF",
      pink200: "#FFC6EE",
      pink100: "#FFE3F7",
      pink50: "#FFF0F9",

      black: "#000000",
      white: "#FFFFFF",

      transparent: "transparent",
      current: "currentColor",
    },

    fontSize: {
      bold48: [
        "48px",
        {
          fontWeight: 700,
          lineHeight: "58px",
        },
      ],
      bold40: [
        "40px",
        {
          fontWeight: 700,
          lineHeight: "48px",
        },
      ],
      bold36: [
        "36px",
        {
          fontWeight: 700,
          lineHeight: "44px",
        },
      ],
      bold32: [
        "32px",
        {
          fontWeight: 700,
          lineHeight: "38px",
        },
      ],
      medium28: [
        "28px",
        {
          fontWeight: 500,
          lineHeight: "34px",
        },
      ],
      medium24: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "28px",
        },
      ],
      bold24: [
        "24px",
        {
          fontWeight: 700,
          lineHeight: "28px",
        },
      ],
      medium20: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      semibold20: [
        "20px",
        {
          fontWeight: 600,
          lineHeight: "24px",
        },
      ],
      medium18: [
        "18px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      bold18: [
        "18px",
        {
          fontWeight: 700,
          lineHeight: "22px",
        },
      ],
      medium16: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      semibold16: [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "20px",
        },
      ],
      medium14: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "16px",
        },
      ],
      bold14: [
        "14px",
        {
          fontWeight: 700,
          lineHeight: "16px",
        },
      ],
      medium12: [
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
    keyframes: {
      bouncing: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.25)" },
      },
      "toast-top": {
        "0%": { transform: "translateY(-100%)", opacity: 0 },
        "10%": { transform: "translateY(0)", opacity: 1 },
        "90%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(-100%)", opacity: 0 },
      },
      "toast-bottom": {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "10%": { transform: "translateY(0)", opacity: 1 },
        "90%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(100%)", opacity: 0 },
      },
    },
    animation: {
      bouncing: "bouncing 0.5s ease-in-out",
      "toast-top": "toast-top 3s ease-in-out",
      "toast-bottom": "toast-bottom 3s ease-in-out",
    },
  },
  plugins: [],
};
