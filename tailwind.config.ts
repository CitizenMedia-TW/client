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
        globalbg: 'var(--background-color)',
        divider: 'var(--color-divider)',
        menu_blue: 'var(--color-menu-blue)',
        topbar_button: 'var(--color-topbar-btn)',
        menu_yellow: 'var(--color-menu-yellow)',
        menu_line: 'var(--color-menu-line)',
        newstories_line: 'var(--color-newstories-line)',
        storyblock: 'var(--color-storyblock)',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
}
export default config
