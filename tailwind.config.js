/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-\[.*?\]/, // Keep all arbitrary background classes
    },
  ],
  theme: {
    extend: {
      boxShadow: {
        'arrow-shadow': 'inset 4px 4px 17.4px 0px rgba(255, 255, 255, 0.28)',
      },
      fontFamily: {
        Manrope: ['"Manrope"', "serif"],
        Inter: ['"Inter"', "serif"],
        Poppins: ['"Poppins"', "serif"],
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
