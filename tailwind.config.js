/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "460px",
      md: "768px", 
      lg: "1024px",  
    },
    extend: {
      colors: {
        primaryColor: "",
        secondaryColor: "#ffb703",
        blackColor: "#000",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
        },
      },
      keyframes: {
        topBottom: {
          "0% , 100%": { transform: "translateY(15px)" },
          "50%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        topBottom: "topBottom 1.5s ease-in-out infinite",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
