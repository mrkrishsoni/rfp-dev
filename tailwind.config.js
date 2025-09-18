/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1B",
        secondary: "#262626",
        tertiary: "#2F2F2F",
        quaternary: "#363636",
        border: "#404040",
        hover: "#4B4B4B",
        text1: "#A1A1A1",
        w1: "#FAFAFA",
        brand: "#D8C453",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
