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
        primary: '#5D5FEF',
        grey: {
          900: '#151D48',
          700: '#737791',
          300: '#F9FAFB',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
