/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        navy: '#181c2c',
        darkBlue: '#282c3c',
      },
      fontFamily: {
        elegant: ['"Dancing Script"', 'Dancing Script'],
        kanit: ['Kanit', 'sans'],
      },
    },
  },
  plugins: [],
};
