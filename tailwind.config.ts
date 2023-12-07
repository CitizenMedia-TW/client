import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          content: 'var(--color-primary-content)',
          footer: 'var(--color-primary-footer)',
          sidebar: 'var(--color-primary-sidebar)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          content: 'var(--color-secondary-content)',
        },
        accent: {
          DEFAULT: '#FFFFFF',
        },
        base: {
          DEFAULT: 'var(--background-color)',
          content: 'var(--color-text-primary)',
          footer: 'var(--color-text-secondary)',
        },
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  darkMode: 'class',
}
export default config
