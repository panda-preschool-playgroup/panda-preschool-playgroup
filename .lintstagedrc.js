module.exports = {
    "*.(json|md|yml)": "prettier --write",
    "*.(js|jsx|ts|tsx)": ["eslint --fix", "prettier --write"],
    "*.(js|jsx|ts|tsx|noop)": () => "jest --onlyChanged --bail",
    "*.(ts|tsx)": () => "tsc",
};
