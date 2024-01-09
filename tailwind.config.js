/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "searchboxgradient": "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(0deg, #D9D9D9, #D9D9D9);"
      }
    },
  },
  plugins: [],
}

