/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4D3229", // Brown (Primary Brand Color)
          light: "#805040",   // Lighter Brown (Secondary Brand Color)
          dark: "#2d1b15",    // Darker Brown
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber-500
          hover: "#d97706",   // Amber-600
        },
        dark: "#1e293b",      // Slate-800
        light: "#f8fafc",     // Slate-50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
