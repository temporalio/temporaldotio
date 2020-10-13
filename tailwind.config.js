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
    extend: {
      colors: {
        'white': '#F2F2F2',
        'spaceblack': '#141414',
        'purple': '#B8B4DC',
        'gray5': '#E0E0E0',
        'lightteal': '#C7EDEF'
      },
    },
  },
  variants: {},
  plugins: [],
}