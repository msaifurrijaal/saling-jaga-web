/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a55ee',
        'primary-light': '#5176fb',
        'primary-lighter': '#89a1f6',
        'primary-dark': '#042aae',
        'primary-darker': '#031e7d',
        'neutral' : '#a8a8a8',
        'neutral-light' : '#c2c2c2',
        'neutral-lighter' : '#d4d4d4',
        'neutral-dark' : '#868686',
        'neutral-darker' : '#656565',
        'success' : '#21d88b',
        'success-light' : '#76eaba',
        'success-lighter' : '#a8ebcf',
        'success-dark' : '#25a26d',
        'success-darker' : '#0d5436',
        'warning' : '#f3bd30',
        'warning-light' : '#f5ca59',
        'warning-lighter' : '#f7d16e',
        'warning-dark' : '#dbaa2b',
        'warning-darker' : '#c29726',
        'error' : '#ee3535',
        'error-light' : '#f04949',
        'error-lighter' : '#f15d5d',
        'error-dark' : '#be2a2a',
        'error-darker' : '#a72525',
        'black': '#1A191A',
        'white': '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins']
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
    },
  },
  plugins: [],
}
