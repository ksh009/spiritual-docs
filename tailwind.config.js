/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' if you prefer system settings
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "open-accordion": "openAccordion 7s ease-out forwards",
      },
      keyframes: {
        openAccordion: {
          "0%": { opacity: "0", maxHeight: "0" },
          "100%": { opacity: "1", maxHeight: "1000px" },
        },
      },
    },
  },
  plugins: [],
};
