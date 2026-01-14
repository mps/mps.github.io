/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        // Warm cream/paper palette
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EBE5DB',
          400: '#D9D0C1',
          500: '#C7BAA7',
          600: '#A89A85',
          700: '#8B7355',
          800: '#6B5A45',
          900: '#4A3F32',
          950: '#2D2A26',
        },
        // Warm dark palette
        ink: {
          50: '#F5F3F0',
          100: '#E8E4DE',
          200: '#D1CAC0',
          300: '#B5AA9A',
          400: '#9B8B73',
          500: '#7A6B55',
          600: '#5C5042',
          700: '#3D352C',
          800: '#2A2520',
          900: '#1C1A17',
          950: '#0F0E0C',
        },
        // Accent - deeper blue (slate-blue tones)
        accent: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d4fe',
          300: '#a4b8fc',
          400: '#7c93f8',
          500: '#5a6fd1',
          600: '#4756a8',
          700: '#3a4789',
          800: '#2d3866',
          900: '#242d4d',
          950: '#171c30',
        },
        // Keep sienna for backwards compatibility (aliased to accent)
        sienna: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d4fe',
          300: '#a4b8fc',
          400: '#7c93f8',
          500: '#5a6fd1',
          600: '#4756a8',
          700: '#3a4789',
          800: '#2d3866',
          900: '#242d4d',
          950: '#171c30',
        },
        // Keep neutral for compatibility
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'underline-grow': 'underlineGrow 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        underlineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
