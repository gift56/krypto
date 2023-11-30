/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF443B",
        bodybg: "#160E33",
      },
      boxShadow: {
        stepShad: "0px 0px 40px 0px rgba(239, 68, 59, 0.40)",
      },
    },
  },
  plugins: [],
};
