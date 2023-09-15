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
            "sofia-pro-soft-bold": ['"Sofia Pro Soft Bold"'],
            "dk-crayon-crumble": ["DK Crayon Crumble"],
            quicksand: ["Quicksand"],
        },
    },
    plugins: [],
};

export default config;
