/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'void': '#0a0a0a',
        'void-2': '#111111',
        'void-3': '#1a1a1a',
        'sand': '#E8E0D5',
        'sand-dim': '#9A9189',
        'caramel': '#8C6239',
        'caramel-light': '#A8784A',
        'leather-cream': '#FBF9F6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
