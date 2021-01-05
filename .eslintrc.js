module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "unused-imports"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["packages/*/tsconfig.json", "packages/apps/*/tsconfig.json"],
      },
    },
  },
  rules: {
    "no-empty": "warn",
    "import/no-unresolved": "error",
    "import/order": [
      "warn",
      {
        "newlines-between": "never",
        groups: [
          "builtin",
          "external",
          "internal",
          "object",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "off" || [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
