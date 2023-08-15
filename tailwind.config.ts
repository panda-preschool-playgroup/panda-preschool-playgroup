import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: "#73d05d",
                    dark: "#68bb54",
                },
                blue: {
                    DEFAULT: "#2c7ac2",
                    dark: "#276cac",
                },
                yellow: {
                    light: "#ffd85a",
                    DEFAULT: "#fbd40a",
                },
                cyan: {
                    DEFAULT: "#066477",
                    dark: "#055a6b",
                },
            },
            brightness: {
                80: ".8",
            },
        },
        fontFamily: {
            "darumadrop-one": ['"Darumadrop One"'],
            quicksand: ["Quicksand"],
        },
    },
    plugins: [],
};

export default config;
