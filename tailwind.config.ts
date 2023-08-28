import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                green: {
                    light: "#73d05d",
                    DEFAULT: "#419a2d",
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
