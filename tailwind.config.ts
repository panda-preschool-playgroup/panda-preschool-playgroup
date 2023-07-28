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
                blue: {
                    DEFAULT: "#3187d7",
                    dark: "#276cac",
                },
                yellow: {
                    light: "#ffd85a",
                    DEFAULT: "#fbd40a",
                },
                cyan: {
                    DEFAULT: "#2d7985",
                    dark: "#145f6b",
                },
            },
        },
        fontFamily: {
            "kg-second-chances": ['"KG Second Chances"'],
            quicksand: ['"Quicksand"'],
        },
    },
    plugins: [],
};

export default config;
