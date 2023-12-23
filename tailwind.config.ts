import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'
import customPlugins from './components/tailwind/section'

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
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        ...customPlugins,
      })
    }),
  ],
  darkMode: 'class',
}
export default config
