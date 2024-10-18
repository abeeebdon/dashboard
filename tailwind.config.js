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
        success: '#27AE60',

        grey: {
          900: '#151D48',
          800: '#4079ED',
          80: '#444A6D',
          700: '#737791',
          300: '#F9FAFB',
          100: '#DCFCE7',
          shade: '#05004E',
        },
        purples: {
          100: '#F3E8FF',
        },
        pink: {
          50: '#FFF4DE',
          100: '#FFE2E5',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
