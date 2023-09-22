import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
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
