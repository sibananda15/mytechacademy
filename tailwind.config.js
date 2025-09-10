/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d6f0ff",
          200: "#aee0ff",
          300: "#7ecbff",
          400: "#4fb2ff",
          500: "#1f95ff",
          600: "#0f74db",
          700: "#0c59ad",
          800: "#0d4a8a",
          900: "#0f3f72"
        }
      }
    },
  },
  plugins: [],
}
