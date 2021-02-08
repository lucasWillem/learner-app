module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "react-app",
    "react-app/jest",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/flowtype",
    "prettier/prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {},
};
