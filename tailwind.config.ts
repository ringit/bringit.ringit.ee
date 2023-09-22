import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      min: '20rem',
      sm: '37.5rem',
      md: '50rem',
      lg: '62.5rem',
      xl: '75rem',
      '2xl': '90rem',
      '3xl': '106.25rem',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      fontFamily: {
        sans: ['var(--font-cooper)', ...fontFamily.sans],
        reglo: ['var(--font-reglo)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
