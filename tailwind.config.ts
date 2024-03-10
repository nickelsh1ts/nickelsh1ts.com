import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.purple.300'),
            a: {
              color: theme('colors.purple.500'),
              '&:hover': {
                color: theme('colors.purple.400'),
              },
            },

            h1: {
              color: theme('colors.purple.300'),
            },
            h2: {
              color: theme('colors.purple.300'),
            },
            h3: {
              color: theme('colors.purple.300'),
            },
            h4: {
              color: theme('colors.purple.300'),
            },
            h5: {
              color: theme('colors.purple.300'),
            },
            h6: {
              color: theme('colors.purple.300'),
            },

            strong: {
              color: theme('colors.purple.400'),
            },

            code: {
              color: theme('colors.purple.300'),
            },

            figcaption: {
              color: theme('colors.purple.500'),
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
  ],
};
export default config;
