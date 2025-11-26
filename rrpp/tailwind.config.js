/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'card-bg': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
