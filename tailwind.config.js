/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#A18AFF",
                secondry: "#F9F8FD",
                personal: "#FB859E",
                freelance: "#38CBF2",
                work: "#FABB00",
                icons: "#D5A3FE",
            },
            height: {
                "3px": "3px",
            },
        },
    },
    plugins: [],
};
