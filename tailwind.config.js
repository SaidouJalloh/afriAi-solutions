/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "afri-primary": "#2B248C",
                "afri-secondary": "#33CAE5",
                "afri-text-primary": "#1A1A1A",
                "afri-text-secondary": "rgba(255, 255, 255, 0.9)",
                "afri-text-muted": "rgba(26, 26, 26, 0.7)",
                "afri-stroke-square-color": "#D9D9D9",
            },
            boxShadow: {
                "white-card": "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
                "violet-card": "0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1)",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1025px",
            xl: "1280px",
            "mid-xl": "1380px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
