import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        side: "35vw",
        black: "65%",
        white: "35%",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        Roboto: ["Roboto"],
      },
      colors: {
        pointColor: "rgb(20, 60, 86)",
        greenColor: "rgb(0, 200, 140)",
        bgColor: "rgb(48, 48, 48)",
        bgColor2 : "#121212",
        inside: "#01092b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "close-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "close-out": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "color-change": {
          "0%": { color: "rgb(0,200,140)" },
          "100%": { color: "rgb(0,200,140)" },
        },
      },
      animation: {
        "close-in": "close-in .5s ease-in-out",
        "close-out": "close-out .5s ease-in-out",
        "opacity-1": "opacity 1s 1s  ease-out forwards",
        "opacity-1.5": "opacity 1s 1.5s  ease-out forwards",
        "colortimer-1": "color-change .5s 1.8s ",
        "colortimer-2": "color-change .5s 2.3s ",
        "colortimer-3": "color-change .5s 2.8s ",
      },
    },
  },
  plugins: [],
};
export default config;
