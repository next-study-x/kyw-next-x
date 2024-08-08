import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "516px",
      md: "1016px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        6: "0.375em",
        7: "0.438em",
        8: "0.500em",
        9: "0.563em",
        10: "0.625em",
        11: "11px",
        12: "0.750em",
        13: "0.813em",
        14: "0.875em",
        15: "0.938em",
        16: "1.000em",
        18: "1.125em",
        20: "1.250em",
        22: "1.375em",
        24: "1.500em",
        64: "64px",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
      },
      colors: {
        gray: {
          100: "#2f3336",
          600: "#E7E9EA",
        },
        blue: {
          500: "#1d9bf0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
