/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EF",
        pink: "#F6B6C8",
        studio: {
          black: "#0A0A0A",
          gold: "#B89D6A",
          cream: "#F7F4EF",
          gray: "#8C8C8C",
        },
      },
      boxShadow: {
        cinematic: "0 20px 60px rgba(0,0,0,.15)",
        glass: "0 8px 30px rgba(0,0,0,.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};