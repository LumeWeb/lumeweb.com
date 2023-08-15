/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  variants: {
    extend: {
      boxShadow: ['active']
    }
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-aquamarine)',
        "dark-aquamarine": 'var(--color-dark-aquamarine)',
        body: 'var(--color-gray)',
        "gradient-aqua": "linear-gradient(to right, var(--color-dark-aquamarine), var(--color-aquamarine))",
      }
    },
    fontFamily: {
      'body': '"Jaldi", sans-serif',
      'display': '"JetBrains Mono", monospace',
      'display2': '"IBM Plex Sans Devanagari", monospace',
    },
  },
}
