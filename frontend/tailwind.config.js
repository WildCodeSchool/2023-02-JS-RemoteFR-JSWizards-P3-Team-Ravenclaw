/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333375",
        primaryDark: "#181634",
        primaryLight: "#6263D5",
        primaryLightest: "#9596FB",
        neutral: "#AAAAAA",
        neutralDark: "#6C6C6C",
        neutralDarkest: "#1C1C29",
        neutralLight: "#D9D9D9",
        neutralLightest: "#F5F5F5",
        success: "#29C04A",
        successLight: "#E0FFE5",
        error: "#F07472",
        errorDark: "#EA3829",
        errorLight: "#FFEBE7",
      },

      fontFamily: {
        sans: ['"Lato"', "sans"],
        header: ['"Gilroy"', "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "2",
            fontWeight: "900",
          },
        ],
        xl: [
          "1.375rem",
          {
            lineHeight: "2.5",
            fontWeight: "900",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "2.5",
            fontWeight: "300",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.333",
            fontWeight: "400",
          },
        ],
        "2xs": [
          "0.625rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [],
  },
};
