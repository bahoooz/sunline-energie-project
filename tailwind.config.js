import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#FBAC18",
        dashboardBlue: "#59A1FF",
        secondary: "#59A1FF",
        dashboardGreen: "#6AAD7E",
        dashboardRed: "#CD5460"
      },
    },
  },
  corePlugins: {
    container: false,
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"), 
    heroui()
  ],
};
