/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        veryDarkYellow: 'hsla(30, 28%, 46%, 1)',
        footerBlack: 'hsla(0, 0%, 7%, 1)',
        softYellow: 'hsla(36, 67%, 62%, 1)',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

