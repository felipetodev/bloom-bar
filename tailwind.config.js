/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './ui/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        landscape: '0.75fr 1fr'
      },
      dropShadow: {
        '3xl': [
          '0 15px 65px rgba(0, 0, 0, 0.85)',
          '0 45px 65px rgba(0, 0, 0, 1)'
        ]
      },
      backgroundImage: {
        'comming-soon': "url('/coming-soon-bg.jpeg')",
        'logo-gradient-radial': 'radial-gradient(41.82% 41.82% at 50% 50%, rgba(0, 0, 0, 0.5) 55.9%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 21.04%)',
        'promotion-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)',
        'nav-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) -28.53%, rgba(0, 0, 0, 0) 90.35%)',
        'menu-card': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 79.36%, rgba(0, 0, 0, 0.8) 100%)'
      },
      colors: {
        bloom: {
          orange: {
            100: '#E38E69'
          },
          black: {
            100: '#141414'
          },
          gray: {
            100: '#E7EBE7',
            200: '#778078'
          },
          softGray: {
            100: '#DDD6CF'
          },
          dark: {
            100: '#131B14'
          },
          darkGreen: {
            100: '#151B15'
          },
          cyan: {
            100: '#03A2D4'
          },
          celeste: {
            100: '#899DC2'
          }
        }
      }
    }
  }
}
