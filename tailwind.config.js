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
                "afri-secondary": "#33CAE5",
                background: "oklch(var(--background) / <alpha-value>)",
                foreground: "oklch(var(--foreground) / <alpha-value>)",
                muted: {
                    DEFAULT: "oklch(var(--muted) / <alpha-value>)",
                    foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
                },
                popover: {
                    DEFAULT: "oklch(var(--popover) / <alpha-value>)",
                    foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "oklch(var(--card) / <alpha-value>)",
                    foreground: "oklch(var(--card-foreground) / <alpha-value>)",
                },
                border: "oklch(var(--border) / <alpha-value>)",
                input: "oklch(var(--input) / <alpha-value>)",
                primary: {
                    DEFAULT: "oklch(var(--primary) / <alpha-value>)",
                    foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
                    foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "oklch(var(--accent) / <alpha-value>)",
                    foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
                    foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
                },
                ring: "oklch(var(--ring) / <alpha-value>)",
                chart: {
                    1: "oklch(var(--chart-1) / <alpha-value>)",
                    2: "oklch(var(--chart-2) / <alpha-value>)",
                    3: "oklch(var(--chart-3) / <alpha-value>)",
                    4: "oklch(var(--chart-4) / <alpha-value>)",
                    5: "oklch(var(--chart-5) / <alpha-value>)",
                },
            },
            boxShadow: {
                "white-card": "0 2px 8px 0 rgb(0 0 0 / 0.04), 0 1px 2px 0 rgb(0 0 0 / 0.02)",
                "violet-card": "0 4px 16px 0 rgb(0 0 0 / 0.25), 0 2px 4px 0 rgb(0 0 0 / 0.15)",
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
