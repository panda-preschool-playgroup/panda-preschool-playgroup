module.exports = {
    "*.(json|md|yml)": "prettier --write",
    "*.(js|jsx|ts|tsx)": ["eslint --fix", "prettier --write"],
    "*.(js|jsx|ts|tsx|noop)": () => "jest --onlyChanged --bail",
    "src/**/*.(ts|tsx)": () => "tsc",
    "cypress/**/*": () => "tsc --project cypress/tsconfig.json",
};
