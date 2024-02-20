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
            screens: {
                "2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                xl: { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                lg: { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                md: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                sm: { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
};
