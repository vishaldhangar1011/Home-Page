/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customLightGray: '#E8E9EE',
        customGray: '#1B1B1E',
        customGreen: '#02C4A6',
        customBlue: '#0197DA',
          
      },
      
    },
  },
  plugins: [],
}

