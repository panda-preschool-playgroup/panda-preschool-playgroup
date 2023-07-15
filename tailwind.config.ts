import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
