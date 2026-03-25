/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C5D',
          50: '#E8EFF4',
          100: '#D1DFE9',
          200: '#A3BFD3',
          300: '#759FBD',
          400: '#477FA7',
          500: '#195F91',
          600: '#0B3C5D',
          700: '#082D46',
          800: '#061E2F',
          900: '#030F18',
        },
        secondary: {
          DEFAULT: '#C8A96A',
          50: '#F8F5EE',
          100: '#F1EBDD',
          200: '#E3D7BB',
          300: '#D5C399',
          400: '#C8A96A',
          500: '#B89347',
          600: '#947638',
          700: '#70582A',
          800: '#4C3B1C',
          900: '#281D0E',
        },
        accent: {
          DEFAULT: '#FF6A00',
          50: '#FFE8D6',
          100: '#FFD9BA',
          200: '#FFBB82',
          300: '#FF9D4A',
          400: '#FF8412',
          500: '#FF6A00',
          600: '#C75300',
          700: '#8F3C00',
          800: '#572500',
          900: '#1F0D00',
        },
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
