module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-default': '#F4F3EE',
        'card-default': '#BCB8B1',
        'button-confirmed': '#5C95FF',
        'button-unconfirmed': '#B75260',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
