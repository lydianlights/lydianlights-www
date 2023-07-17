module.exports = {
    printWidth: 100,
    tabWidth: 4,
    endOfLine: "auto",
    bracketSameLine: false,
    quoteProps: "consistent",
    plugins: ["prettier-plugin-svelte"],
    pluginSearchDirs: ["."],
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
