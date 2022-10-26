/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'comming-soon': "url('/coming-soon-bg.jpeg')"
      },
      colors: {
        bloom: {
          orange: {
            100: '#FF5C00'
          },
          gray: {
            100: '#E7EBE7',
            200: '#778078'
          },
          dark: {
            100: '#131B14'
          },
          cyan: {
            100: '#03A2D4'
          }
        }
      }
    }
  }
}
