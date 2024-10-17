module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this path depending on your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(120, 50%, 95%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
