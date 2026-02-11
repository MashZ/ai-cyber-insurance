import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f2b46',
          50: '#f0f5fa',
          100: '#dce7f2',
          200: '#b8cfe5',
          300: '#7da8cf',
          400: '#3d7db5',
          500: '#1e5a94',
          600: '#0f4377',
          700: '#0f2b46',
          800: '#0a1e32',
          900: '#061220',
        },
        accent: {
          DEFAULT: '#0f4377',
          light: '#1e5a94',
          dark: '#0a2e52',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
