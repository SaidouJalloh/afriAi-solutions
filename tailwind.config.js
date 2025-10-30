/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#2B24BC',
                secondary: '#33CAE5',
                'text-primary': '#1A1A1A',
                'text-secondary': 'rgba(255, 255, 255, 0.9)',
                'text-muted': 'rgba(26, 26, 26, 0.7)',
            },
            boxShadow: {
                'white-card':
                    '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
                'violet-card':
                    '0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
