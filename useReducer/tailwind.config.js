import Weather from './src/component/Weather';

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Weather:'url("https://i.pinimg.com/originals/fc/65/ed/fc65ed39295d6a220c5a04b3595b199d.gif")'
      }
    },
  },
  plugins: [],
}

