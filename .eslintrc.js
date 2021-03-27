module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'simple-import-sort'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    //  "indent": ["error", 2],
    //  "indent": ["error", 2, { "offsetTernaryExpressions": false }],
    // 'react/jsx-filename-extension': ['warn',{ 'extensions': ['.js', '.jsx'] }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
