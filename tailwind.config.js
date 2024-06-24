/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {

        primary: 'rgb(var(--bg-primary) / <alpha-value>)',
        secondry: 'rgb(var(--bg-secondary) / <alpha-value>)',
        primaryColor: 'rgb(var(--text-primary) / <alpha-value>)',
        secondryColor: 'rgb(var(--text-secondary) / <alpha-value>)',
        main: 'rgb(var(--main) / <alpha-value>)',
        shadow: 'rgb(var(--shadow) / <alpha-value>)',
      },
    },
  },
  plugins: [],
})
