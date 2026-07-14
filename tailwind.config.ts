import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // The Pitch Black Base
                background: "#000000",
                // Deep Rich Charcoal for cards/containers
                surface: "#0C0C0E",
                // Precise Borders
                "border-muted": "#1C1C1E",
                // Lamborghini Arancio Xanto Accent
                brand: {
                    orange: "#E95420",
                },
                // Typography
                "text-header": "#FFFFFF",
                "text-body": "#8A8A93",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
                mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, #1C1C1E 1px, transparent 1px), linear-gradient(to bottom, #1C1C1E 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
};

export default config;
