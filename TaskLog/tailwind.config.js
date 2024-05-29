/** @type {import('tailwindcss').Config} */
import ratioPlugin from '@tailwindcss/aspect-ratio'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ratioPlugin,
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/container-queries'),
    // eslint-disable-next-line no-undef
    require("tw-elements/plugin.cjs"),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}

