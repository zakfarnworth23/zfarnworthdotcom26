/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          bg: '#f5f5f7',
          darkBg: '#161617',
          navBg: 'rgba(255, 255, 255, 0.8)',
          text: '#1d1d1f',
          subtext: '#86868b',
          blue: '#0066cc',
          blueHover: '#0077ed',
          border: '#d2d2d7',
        },
      },
    },
  },
  plugins: [],
};