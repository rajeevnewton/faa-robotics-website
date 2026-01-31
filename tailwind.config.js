/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FAA Robotics Brand Colors - Cyan Blue & Electric Yellow
        'faa-yellow': {
          50: '#fffbea',
          100: '#fff3c4',
          200: '#ffe785',
          300: '#ffd846',
          400: '#ffc107',
          500: '#ffb300',  // Electric Yellow
          600: '#ff8f00',
          700: '#ff6f00',
          800: '#e65100',
          900: '#bf360c',
        },
        'faa-blue': {
          50: '#e0f7ff',
          100: '#b3ecff',
          200: '#80e0ff',
          300: '#4dd4ff',
          400: '#26c9ff',
          500: '#00bfff',  // Cyan Blue
          600: '#00a8e0',
          700: '#008fbf',
          800: '#00779f',
          900: '#005f7f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
