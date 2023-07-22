import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: "#77cf5f",
                    dark: "#449E57",
                },
                blue: "#3489d9",
                yellow: {
                    DEFAULT: "#fbd40a",
                    dark: "#FFB427",
                },
            },
        },
        fontFamily: {
            "kg-second-chances": ['"KG Second Chances"'],
            "kg-neatly-printed": ['"KG Neatly Printed"'],
        },
    },
    plugins: [],
};

export default config;
