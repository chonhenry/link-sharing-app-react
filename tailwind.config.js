/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      purple: "#633cff",
      "hover-purple": "#beadff",
      "light-purple": "#efebff",
      "dark-grey": "#333333",
      grey: "#737373",
      borders: "#d9d9d9",
      "light-grey": "#fafafa",
      white: "#ffffff",
      red: "#ff3939",
      green: colors.green,
    },
    extend: {},
  },
  plugins: [],
};
