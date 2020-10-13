module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['AeonikTRIAL', 'sans-serif'],
      body: ['AeonikTRIAL', 'sans-serif'],
    },
    extend: {
      colors: {
        'white': '#F2F2F2',
      },
    },
  },
  variants: {},
  plugins: [],
}