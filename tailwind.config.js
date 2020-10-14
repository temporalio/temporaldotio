module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'light': ['Aeonik-Light'],
      'bold': ['Aeonik-Bold']
    },
    fontSize: {
      '60': '60px',
      '144': '144px', 
    },
    extend: {
      colors: {
        'white': '#F2F2F2',
        'spaceblack': '#141414',
        'purple2': '#B8B4DC', // this is a hack
        'purple': '#B8B4DC',
        'gray5': '#E0E0E0',
        'lightgray': 'rgba(242,242,242,0.5)',
        'lightteal': '#C7EDEF'
      },
      width: {
        '700': '700px',
        '800': '800px',
      },
      lineHeight: {
        '60': '60px',
        '144': '144px',
      }
    },
  },
  variants: {},
  plugins: [],
}