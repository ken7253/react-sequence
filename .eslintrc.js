/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import("eslint").ESLint.ConfigData}
 */
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
  overrides: [
    {
      files: ['**/*.tsx'],
      extends: ['plugin:react/recommended'],
    },
    {
      files: ['**/*.stories.tsx'],
      extends: ['eslint-plugin-storybook'],
    },
  ],
};
