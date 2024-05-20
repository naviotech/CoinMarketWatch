/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "menu-burgeur":"url('../assets/burguer.svg')",
        "menu-close":"url('../assets/close.svg')"
      },
      fontFamily:{
        "public-sans" : '"Public Sans", sans-serif'
      }
    },
  },
  plugins: [],
}

