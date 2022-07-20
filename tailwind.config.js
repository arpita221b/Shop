/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "ui-sans-serif"],
    },
    extend: {
      colors: {
        backg: "#0F044C",
        butttong: "#BC62FF",
        card: "#150485",
      },
      boxShadow: {
        glow: "0px 0px 100px 1px #BC62FF",
      },
    },
  },
  plugins: [],
};
