/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    
    colors: {
      'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
      'light-cyan-background': 'hsl(180, 52%, 96%)',
      'light-cyan-filter-tablets': 'hsl(180, 31%, 95%)',
      'dark-cyan': 'hsl(180, 8%, 52%)',
      'very-dark-cyan': 'hsl(180, 14%, 20%)',
      'white': 'rgb(255, 255, 255)'
    },

    fontFamily: {
      'sans': 'League Spartan, sans-serif'
    },

    screens: {
      'sm': {'max': '376px'}
    }
  },
  plugins: [],
};