module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor:theme=>({
      ...theme('colors'),
      "sentinel-nav-blue": "#002A48",
      "sentinel-body-blue": "#002641",
      "sentinel-layer1-blue": "#001F35",
      "sentinel-l-g-blue": "#3A7BD5",
      "sentinel-l2-g-blue": "#00D2FF",
      "sentinel-l3-g-blue": "#071926",
    }),
    extend: {
      colors: {
        "sentinel-body-blue": "#002641",
        "sentinel-l2-g-blue": "#00D2FF",
        "sentinel-l-g-blue": "#3A7BD5",
        "sentinel-gray-nav": "#6A899B",
        "sentinel-text-blue": "#2D87C9",
      }

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}