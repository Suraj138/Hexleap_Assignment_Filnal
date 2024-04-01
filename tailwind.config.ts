import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        light: {
          primary: '#F7F7F8',
          secondary: '#fff',
          gradient:'linear-gradient(180deg,#F9F8FF_0%,#F3F9FF_100%)'
          // Add more colors as needed
        },
        dark: {
          primary: '#292B32',
          secondary: '#3B3E47',
          gradient: 'linear-gradient(180deg,#18282A_0%,#221A2C_100%)',
          // quaternary: '#d53f8c',
          // Add more colors as needed
        }
      },
    },
  },
  plugins: [],
};
export default config;
