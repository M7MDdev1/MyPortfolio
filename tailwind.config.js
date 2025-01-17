/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path according to your project structure
    "./public/index.html", // If you have an index.html in the public directory
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['"Manrope"', "serif"],
        Inter: ['"Inter"', "serif"],
      },
      colors: {
        dark12: 'var(--Dark-12, #1C1C21)',
      },
      backgroundImage: {
        HomeColor: "linear-gradient(0deg, rgba(22, 21, 19, 0.78) 0%, rgba(22, 21, 19, 0.78) 100%), conic-gradient(from 168deg at 50% 33.01%, rgba(93, 48, 190, 0.43) 126deg, rgba(31, 19, 165, 0.48) 310deg)",
      },


    },
  },
  plugins: [],
};
