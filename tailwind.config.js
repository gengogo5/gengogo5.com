module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
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
