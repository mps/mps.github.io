/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0085A1',
        'gray-dark': '#333333',
        'gray-light': '#808080',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
