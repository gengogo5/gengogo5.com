module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: { max: '640px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
