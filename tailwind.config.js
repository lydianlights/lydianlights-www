import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
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
            black: "#020200",
            white: "#ffffff",
            grey: {
                ...colors.zinc,
                1000: "#070709",
            },
            primary: {
                light: colors.violet[500],
                DEFAULT: colors.violet[600],
                dark: colors.violet[700],
            },
        },
        screens: {
            ...defaultTheme.screens,
            "3xl": "1920px",
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
