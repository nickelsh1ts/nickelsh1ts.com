// eslint-disable-next-line @typescript-eslint/no-unused-vars
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'max-height': 'max-height',
        width: 'width',
      },
      colors: {
        fox: '#F58A07',
        'surface-2': '#212529',
        'surface-4': '#495057',
        'brand-stroke': '#F58A07',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.purple.300'),
            a: {
              color: theme('colors.purple.300'),
              '&:hover': {
                color: theme('colors.purple.600'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;
