import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#0D0C22",
      stone: "#231F20",
      lime: "#B9FF66",
      zinc: {
        100: "#F3F3F3",
        200: "#F0F0F0",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#898989",
        600: "#B0B0B0",
        700: "#787878",
        800: "#292A32",
        900: "#191A23",
      },
    },
  },
  plugins: [],
};
export default config;
