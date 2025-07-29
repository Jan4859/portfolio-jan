/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                bg: '#0B0B0C',
                surface: '#141416',
                text: '#EAEAEA',
                'text-muted': '#CFCFCF',
                gold: '#D4AF37',
                'gold-2': '#B8860B',
                'code-bg': '#18181A',
                border: '#2B2B2D',
                hover: '#1C1C1F',
                ring: '#D4AF3770'
            }
        }
    },
    plugins: []
}
