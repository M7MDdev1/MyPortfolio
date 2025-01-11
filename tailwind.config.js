/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Albert: ['"Albert_Sans"', "sans-serif"],
        Fira: ['"Fira_Code"', "sans-serif"],
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(93, 48, 190, 0.06) 0%, rgba(60, 60, 60, 0.14) 100%), #161616',
      },
    },
  },
  plugins: [],
};
