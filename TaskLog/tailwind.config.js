/** @type {import('tailwindcss').Config} */
import ratioPlugin from '@tailwindcss/aspect-ratio'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/js/**/*.js',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    './node_modules/flowbite/**/*.js',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      }
    }
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
    require('tw-elements/plugin.cjs'),
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ]
}
