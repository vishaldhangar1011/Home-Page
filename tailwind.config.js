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
        customLightGray: '#E8E9EE', //
        customGray: '#1B1B1E',
        customGreen: '#02C4A6', //for button border
        customBlue: '#0197DA',
        customGradient: 'linear-gradient(90deg, #0096DB 0%, #02C4A5 100%)' //for buttons, input gradient
        
      },
      
    },
  },
  plugins: [],
}

