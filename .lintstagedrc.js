module.exports = {
    "*.(json|md|yml)": "prettier --write",
    "*.(js|jsx|ts|tsx)": ["eslint --fix", "prettier --write"],
    "*.(ts|tsx)": () => "tsc --noEmit",
};
