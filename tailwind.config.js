/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: '#4A148C',
          main: '#673AB7',
          light: '#7E57C2',
          lighter: '#B39DDB',
        },
      },
    },
  },
  plugins: [],
};