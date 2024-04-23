/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "375px", // Ajoutez la taille d'écran "xs" avec une valeur de 375px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      Orange: "#fb7413",
      LightGrey: "#959eac",
      MediumGray: "#7c8798",
      Darkblue: "#252d37",
      VeryDarkBlue: "#121417",
    },
    extend: {
      fontFamily: {
        Overpass: ['"Overpass"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
