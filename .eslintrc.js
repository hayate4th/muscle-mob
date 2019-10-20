module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
