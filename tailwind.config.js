// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-default': '#F4F3EE',
        'card-default': '#E5E5E5',
        'card-border-default': '#BCB8B1',
        'button-confirmed': '#5C95FF',
        'button-unconfirmed': '#B75260',
      },
    },
    minHeight: {
      12: '3rem',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      placeholderColor: ['hover', 'active'],
      backgroundOpacity: ['active'],
      backgroundOrigin: ['hover', 'focus'],
    },
  },
  plugins: [],
};
