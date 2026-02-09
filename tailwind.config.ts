import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Navy and Gold theme from DerivLab
        primary: {
          DEFAULT: '#1a2332',
          50: '#f0f1f3',
          100: '#d4d7dd',
          200: '#b8bdc7',
          300: '#9ca3b1',
          400: '#80899b',
          500: '#646f85',
          600: '#505a6e',
          700: '#3c4557',
          800: '#1a2332', // Main navy
          900: '#141b27',
        },
        accent: {
          DEFAULT: '#d4af37',
          50: '#fef9ed',
          100: '#fcf0cf',
          200: '#f9e09f',
          300: '#f5cf6f',
          400: '#e8bd4f',
          500: '#d4af37', // Main gold
          600: '#b8962d',
          700: '#9c7d23',
          800: '#806419',
          900: '#644b0f',
        },
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f9fafb',
        },
        border: '#e5e7eb',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'professional': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'professional-lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
