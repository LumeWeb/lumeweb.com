/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-aquamarine)',
        "dark-aquamarine": 'var(--color-dark-aquamarine)',
        body: 'var(--color-gray)',
      },
    },
    fontFamily: {
      'body': '"Jaldi", sans-serif',
      'display': '"JetBrains Mono", monospace',
    }
  }
}
