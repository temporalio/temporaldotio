module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDelay: {
        3000: '3000ms'
      },
      fontFamily: {
        light: ['Aeonik-Light'],
        bold: ['Aeonik-Bold']
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 3s ease-out'
      },
      colors: {
        white: '#F2F2F2',
        temporalblue: '#B2E7EA',
        spaceblack: '#141414',
        purple: '#B8B4DC',
        gray5: '#E0E0E0',
        lightgray: 'rgba(242,242,242,0.5)',
        lightteal: '#C7EDEF'
      },
      gridTemplateColumns: {
        usecases: '200px minmax(0, 1fr)'
      },
      maxWidth: {
        700: '700px'
      },
      width: {
        200: '200px',
        300: '300px',
        700: '700px',
        800: '800px'
      },
      height: {
        60: '60px',
        200: '200px',
        300: '300px',
        400: '400px',
        700: '700px',
        800: '800px'
      },
      fontSize: {
        60: '60px',
        144: '144px'
      },
      lineHeight: {
        36: '36px',
        48: '48px',
        60: '60px',
        72: '72px',
        144: '144px'
      }
    }
  },
  variants: {
    visibility: ['responsive', 'hover', 'focus'],
    animation: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
