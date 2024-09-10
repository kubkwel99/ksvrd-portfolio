import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        text: 'textAnimation 0.5s ease-out forwards',
      },
      keyframes: {
        textAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        'delay-100': '100ms',
        'delay-200': '200ms',
        'delay-300': '300ms',
        'delay-400': '400ms',
      },

    },
  },
  plugins: [],
};
export default config;
