/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1db954',
          dark: '#121212',
          darker: '#080808',
          light: '#1f1f1f',
          lighter: '#2a2a2a',
          gray: '#b3b3b3',
        },
      },
    },
  },
  plugins: [],
};
