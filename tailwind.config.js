/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-DD': '#dddddd',
        'gray-AA': '#aaaaaa',
        'gray-BB': '#bbbbbb',
        'gray-EE': '#eeeeee',
        'dark-66': '#666666',
        'dark-77': '#777777',
        'dark-99': '#999999',
        'dark-33': '#333333',
        'dark-44': '#444444',
        'blue-34': '#34799e',
      },
    },
  },
  plugins: [],
};
