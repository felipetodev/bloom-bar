/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './ui/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      brightness: {
        25: '.15'
      },
      fontFamily: {
        abel: ['Abel', 'sans-serif'],
        gopher: ['gopher', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        marcellus: ['Marcellus', 'serif']
      },
      gridTemplateColumns: {
        landscape: '0.75fr 1fr'
      },
      dropShadow: {
        '3xl': [
          '0 15px 65px rgba(0, 0, 0, 0.85)',
          '0 45px 65px rgba(0, 0, 0, 1)'
        ]
      },
      animation: {
        border: 'border 4s ease infinite',
        // FavoriteButton like burst; the ring outlasts the pop because its end clears the burst state
        'heart-pop': 'heart-pop 400ms cubic-bezier(0.23, 1, 0.32, 1)',
        // the ring grows fast but fades at a steady pace; easing the opacity too would hide it within the first 100ms
        'heart-ring': 'heart-ring 500ms cubic-bezier(0.23, 1, 0.32, 1) forwards, heart-ring-fade 500ms linear forwards'
      },
      keyframes: {
        'heart-pop': {
          '0%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(0.8)' },
          '55%': { transform: 'scale(1.2)', animationTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' },
          '100%': { transform: 'scale(1)' }
        },
        'heart-ring': {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.8)' }
        },
        'heart-ring-fade': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '0' }
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        modal: "linear-gradient(rgba(0, 0, 0, 0.89), rgba(0, 0, 0, 0.89)), url('/modal-waves.webp')",
        'comming-soon': "url('/coming-soon-bg.jpeg')",
        'logo-gradient-radial': 'radial-gradient(41.82% 41.82% at 50% 50%, rgba(0, 0, 0, 0.5) 55.9%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 21.04%)',
        'promotion-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)',
        'nav-gradient': 'linear-gradient(180deg,rgba(0,0,0,.6) -50%, transparent 80%)',
        'menu-card': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 79.36%, rgba(0, 0, 0, 0.8) 100%)',
        'promotion-bottom-gradient': 'linear-gradient(180deg,#0000 31.42%,#000)'
      },
      letterSpacing: {
        bloom: '0.3em'
      },
      colors: {
        bloom: {
          orange: {
            50: '#FF5C00',
            100: '#FF5900',
            200: '#FF6700' // new menu
          },
          peach: {
            100: '#FCCFB0'
          },
          silver: {
            100: '#D9D9D9'
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
            100: '#151B15',
            200: '#292E28'
          },
          cyan: {
            50: '#03A2D4',
            100: '#899DC2'
          },
          celeste: {
            100: '#899DC2'
          }
        }
      },
      maxWidth: {
        bloom: '1600px'
      }
    }
  }
}
