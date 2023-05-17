const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        alt: ["'Poppins'", ...defaultTheme.fontFamily.sans],
        sans: ["'Chivo'", ...defaultTheme.fontFamily.sans],
      },
      height: {
        max: "35em",
        mdx: "30em",
        madx: "25em",
        medx: "20em",
        med: "15em",
      },
      colors: {
        "gold-200": "#FED701",
        "gold-300": "#FCB305",
        "gold-400": "#F9A826",
        "gold-100": "#F3904F",
        "main-bluegreen": "#57B894",
        violet: "#756BED",
        "rgba-1": "rgba(235, 237, 245, 0.1)",
      },
      zIndex: {
        "-1": "-1",
      },
      inset: {
        5: "5%",
        15: "15%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [],
};
