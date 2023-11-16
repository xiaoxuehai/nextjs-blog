import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      //   colors: {
      //     black: '#000212',
      //   },
      typography: () => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.600')
          },
        },
        custom: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: 400,
            },
            blockquote: {
              fontSize: 15,
              fontWeight: 400,
            },
          },
        },
      }),
    },
  },
  plugins: [typography, tailwindcssAnimate],
};
export default config;
