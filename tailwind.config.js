/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './signup.html', './getstarted.html', 'desktopapp.html'],
  theme: {
    extend: {
      screens: {
        'xs': '250px', // Custom breakpoint
      },
    },
  },
  plugins: [],
}

