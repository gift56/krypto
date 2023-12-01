/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF443B",
        bodybg: "#160E33",
      },
      boxShadow: {
        stepShad: "0px 0px 4px 0px rgba(239, 68, 59, 0.40)",
        stephoverShad: "0px 0px 40px 0px rgba(239, 68, 59, 0.40)",
      },
      backgroundImage: {
        herobg: "url(./public/img/heroBg.png)",
        advancebg: "url(./public/img/advanceBg.png)",
      },
    },
  },
  plugins: [],
};
