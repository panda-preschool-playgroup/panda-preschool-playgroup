import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: "#77cf5f",
                    dark: "#449e57",
                },
                blue: { DEFAULT: "#3187d7", dark: "#276cac" },
                yellow: {
                    light: "#ffd85a",
                    DEFAULT: "#fbd40a",
                },
                cyan: {
                    DEFAULT: "#078d82",
                    dark: "#166a77",
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
