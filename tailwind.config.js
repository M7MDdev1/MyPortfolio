/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path according to your project structure
    "./index.html", // If you have an index.html in the public directory
  ],
  safelist: [
    {
      pattern: /bg-\[.*?\]/, // Keep all arbitrary background classes
    },
  ],
  theme: {
    extend: {
      boxShadow: {
        "arrow-shadow": "inset 4px 4px 17.4px 0px rgba(255, 255, 255, 0.28)",
      },
      fontFamily: {
        Manrope: ['"Manrope"', "serif"],
        Inter: ['"Inter"', "serif"],
        Poppins: ['"Poppins"', "serif"],
      },
      colors: {
        dark12: "var(--Dark-12, #1C1C21)",
      },
      backgroundImage: {
        HomeColor:
          "linear-gradient(0deg, rgba(22, 21, 19, 0.78) 0%, rgba(22, 21, 19, 0.78) 100%), conic-gradient(from 168deg at 50% 33.01%, rgba(93, 48, 190, 0.43) 126deg, rgba(31, 19, 165, 0.48) 310deg)",
        NavBar:
          "linear-gradient(180deg, #000 1.26%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(to bottom right, #5201E3 16%, #000 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #5201E3 16%, #000 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #5201E3 16%, #000 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #5201E3 16%, #000 50%) top right / 50% 50% no-repeat)",
      },
    },
  },
  plugins: [],
};
