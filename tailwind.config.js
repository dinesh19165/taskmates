/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00B4FF",
                accent: "#EE1C25",
                dark: "#2D2D2D",
                secondary: "#4B5563",
                'brand-deep': "#0A0F1E",
                'brand-purple': "#4A0E2E",
            }
        },
    },
    plugins: [],
}
