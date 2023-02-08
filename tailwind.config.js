/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors:{
        "dukoreTech":"#072b3d",
        "BtnDukore":"#ffb20e",
        "hoverDukore":"#015b89"
      }
    },
    fontFamily:{
      Quicksand:["Quicksand, sans-serif"]
    },
    container: {
      center: true
    },
  },
  plugins: [],
}
