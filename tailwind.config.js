import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000000",
            white: "#ffffff",
            grey: {
                ...colors.zinc,
            },
            primary: {
                light: colors.violet[500],
                DEFAULT: colors.violet[600],
                dark: colors.violet[700],
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("hocus", ["&:hover", "&:focus"]);
            addVariant("hocus-within", ["&:hover", "&:focus-within"]);
            addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
        }),
    ],
};
