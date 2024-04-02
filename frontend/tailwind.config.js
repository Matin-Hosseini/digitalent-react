/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
      colors: {
        app: {
          light: "#f1eaea",
          dark: "#242329",
          DEFAULT: "#f1eaea",
        },
        section: {
          light: "#f9f9f9",
          dark: "#312f3c",
          DEFAULT: "#f1eaea",
        },
        yellow: {
          DEFAULT: "#fcc741",
        },
        gray: {},
        red: {
          DEFAULT: "#d74c4c",
        },
        purple: {
          DEFAULT: "#8696fe",
        },
      },
      animation: {
        "movement-x": "movement-x 3s infinite forwards alternate",
      },
      borderRadius: {},
      fontFamily: {
        title: "Persian Titraj",
        text: "Vasir",
      },
      screens: {
        "xs": "530px"
      }
    },
  },
  plugins: [],
};
