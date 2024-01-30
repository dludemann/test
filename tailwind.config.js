/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-h1': [
          '50px',
          {
            lineHeight: '120%',
          },
        ],
        'heading-h2': [
          '38px',
          {
            lineHeight: '120%',
            letterSpacing: '-0.76px',
          },
        ],
        'heading-h3': [
          '32px',
          {
            lineHeight: '120%',
          },
        ],
        'heading-h4': [
          '24px',
          {
            lineHeight: '120%',
          },
        ],
        'heading-h6': [
          '18px',
          {
            lineHeight: '120%',
          },
        ],
        'body-small': [
          '16px',
          {
            lineHeight: '150%',
          },
        ],
        'body-regular': [
          '18.5px',
          {
            lineHeight: '160%',
          },
        ],
        'body-large': [
          '20px',
          {
            lineHeight: '150%',
          },
        ],
        'body-xlarge': [
          '22px',
          {
            lineHeight: '150%',
          },
        ],
      },
      colors: {
        white: '#fff',
        primary: {
          100: '',
          400: '',
          500: '#CC3737',
          700: '#CE1B1B',
          900: '#990808',
        },
        secondary: {
          100: '#7D7D7D',
          300: '#403F3F',
          500: '',
          600: '',
          900: '#090303',
        },
        error: {
          100: '',
          300: '',
          500: '',
          600: '',
          900: '#7F1D1D',
        },
      },
      fontFamily: {
        display: ['Montserrat'],
        body: ['IBM Plex Sans'],
        sans: ['IBM Plex Sans'],
      },
    },
  },
  plugins: [],
};
