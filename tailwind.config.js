/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#A17832',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
}