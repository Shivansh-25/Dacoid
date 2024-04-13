/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FCFCFC",
        "custom-blue": "#89A1FF",
        gray: "#787878",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".placeholder-sm": {
          "::placeholder": {
            fontSize: "0.75rem", // Adjust the size as needed
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
