/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FFFFFF",
        text:"#2071B2",
        textSecondary:"#20B2AA"
      }
    },
  },
  plugins: [],
}

