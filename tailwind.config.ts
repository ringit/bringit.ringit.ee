import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
      },
      fontFamily: {
        sans: ['var(--font-cooper)', ...fontFamily.sans],
        reglo: ['var(--font-reglo)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
