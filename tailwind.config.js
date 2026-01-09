/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0f",
                surface: "#13131f",
                primary: "#00f0ff", // Cyberpunk cyan
                secondary: "#7000ff", // Neon purple
                accent: "#ff003c", // Cyberpunk red
                success: "#00ff9d",
                warning: "#ffd700",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
