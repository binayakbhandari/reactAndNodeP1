/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        'rotating' : 'rotating 10s linear infinite'
      },
      keyframes : {
        rotating : {
          '0%' : {transform : 'rotate(0deg)'},
          '25%' : {transform : 'rotate(90deg)'},
          '50%' : {transform : 'rotate(180deg)'},
          '75%' : {transform : 'rotate(270deg)'},
          '100%' : {transform : 'rotate(360deg)'},
        }
      }
      },
    },
  plugins: [],
}