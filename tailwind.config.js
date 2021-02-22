const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif']
    },
    colors: {
      ...colors,
      pink: {
        ...colors.pink,
        bg: '#F2D7EE',
        silver: '#D3BCC0'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
