/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1025px', 'max': '1200px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1201px' },
      // => @media (min-width: 1536px) { ... }
    }, fontFamily: {
      'Libre-Franklin': ['Libre Franklin', 'sans - serif'],
    },
    colors: {
      'primary': '#4C7BF3',
      'red': '#FF5466',
      'accent': '#B8C7ED',
      'neutral': '#969696',
      'dark-primary': '#15202A',
    },
  },
  extend: {
    boxShadow: {
      '3xl': '0px 0px 7px 3px rgba(0, 0, 0, 0.00)',
      '4xl': '0px 5px 10px 2px rgba(76, 123, 243, 0.23)',
    }
  },
  plugins: [require("tailwindcss-animate")],

}
