/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bluePrimary: "#49DEFF",
        tealPrimary: "#4FFFDF",
        blackPrimary: "#303030",
        secondary01: "#4E4E4E",
        secondary02: "#DEDEDE",
        secondary03: "#F4F4F4",
        secondary04: "#F9F9F9",
        textInDark: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
