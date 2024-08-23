import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11253E",
        secondary: "#fff",
        typoColor: "#1D1D1C",
      },
      backgroundColor: {
        primary: "#11253E",
        secondary: "#fff",
        transparentBlack: "rgb(0,0,0,.5)",
      },
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        garamond: '"Cormorant Garamond", serif',
        play: "'Play', sans-serif",
      },
      backgroundImage: {
        imageSection: `url('/asset/background.png')`,
      },
    },
  },
  plugins: [],
};
export default config;
