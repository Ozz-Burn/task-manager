/** @type {import('tailwindcss').Config} */
import { themeColors } from './src/shared/'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: themeColors,
    extend: {}
  },
  plugins: []
}
