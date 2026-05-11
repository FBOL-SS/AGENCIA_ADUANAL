/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071A33',
        navy2: '#0B2B52',
        steel: '#E9EEF5',
        alpha: '#1B5FA7',
        gold: '#D6A94A'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(7, 26, 51, 0.12)'
      }
    }
  },
  plugins: []
}
