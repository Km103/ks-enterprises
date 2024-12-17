/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    primary: '#0b49cf'
                },
                primary: '#f6f6f6',
                black: '#000511'
            },
            backgroundImage: {
                heroSection: "url('./public/bg.png')"
            }
        }
    },
    plugins: []
};
