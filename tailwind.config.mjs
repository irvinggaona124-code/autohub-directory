/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#132F2A',
          900: '#173B35', // Hero & Brand Dark
          800: '#1E302B',
          700: '#326057',
          600: '#55756D',
        },
        terracotta: {
          400: '#E58A6C',
          500: '#DF7655', // Brand Accent CTA
          600: '#B9583C',
          700: '#9A4E39',
          800: '#85442F',
        },
        sand: {
          50: '#FFFDF7', // Pure Warm White
          100: '#F6F3EB', // Page Background
          200: '#EEF1E8',
          300: '#E8ECE3',
          400: '#DFE2D9',
          500: '#D9DED4', // Subtle Border
        },
        sage: {
          300: '#D2DDD2',
          400: '#B7C9BD',
          500: '#98AC9E',
          600: '#72917F',
          700: '#58665E', // Muted Body Text
          800: '#52615A',
        },
        gold: {
          300: '#F4E9BF',
          400: '#E6C766',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '99px',
        card: '17px',
      }
    },
  },
  plugins: [],
};
