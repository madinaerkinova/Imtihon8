/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "1400px",
        },
        center: true,
        padding: "20px",
      },
      colors: {
        lead: "#202020",
        "brewing-storm": "#7A7687",
        primary: "#088269",
        "dusty-plum": "#D5D1E1",
        "ultra-pure-white": "#F8F7F3",
        farsighted: "#E5E2EE",
        "farsighted-light": "#EEEDF0",
      },
    },
  },
  plugins: [],
};
