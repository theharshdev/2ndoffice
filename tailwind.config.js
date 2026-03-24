/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./components/**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      colors: {
        ink: { 950: "#070A12" },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(2,6,23,.12)",
      },
    },
  },
};

