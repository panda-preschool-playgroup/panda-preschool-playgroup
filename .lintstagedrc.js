module.exports = {
    "*.(js|jsx|ts|tsx|md|json|yml)": "prettier --write",
    "src/**/*.(ts|tsx|noop)": () => "tsc --noEmit",
};
