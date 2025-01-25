/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6007e",
        secondary: "#a41262",
        footer: "#018E42",
      },
    },
  },
  plugins: [],
};


/* 
{
  50: '#ffe1f2',
  100: '#ffb1d3',
  200: '#ff7eb9',
  300: '#ff4ca2',
  400: '#ff1a8f',
  500: '#e6007e',
  600: '#b40056',
  700: '#820035',
  800: '#50001b',
  900: '#200008',
} */