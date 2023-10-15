
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        secondary: {
          100: "#1E1F25",
          400: "#2A332B",
          900: "#0C100C",
        }
      }
    },
  },
  plugins: [],
}

