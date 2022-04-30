const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#141E27",
        secondary: "#1E2C38",
        yellow: "#F7FD04",
        text: "#E7E7DE",
        white: "#f1f1f1",
      },
      fontFamily: {
        amiri: ["Amiri", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      width: {
        1170: "1170px",
      },
      fontSize: {
        3.5: "28px",
      },
    },
  },
  plugins: [],
};
