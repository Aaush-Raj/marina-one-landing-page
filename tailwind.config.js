/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#249ab7',
        secondary: '#ec4899',
        background: '#ffffff',
        text: '#1f2937'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif']
      }
    }
  },
  plugins: []
}
