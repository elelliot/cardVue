/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        neuton: ['"Neuton"', ...defaultTheme.fontFamily.sans],
        cultive: ['"Cultive Mono"', ...defaultTheme.fontFamily.sans],
        alfa: ['"Alfa Slab One"', ...defaultTheme.fontFamily.sans],
    }},
  },
  plugins: [],
}
