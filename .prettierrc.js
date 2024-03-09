/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 120,
  singleQuote: true,
  semi: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react', '^@?\\w', '^[./]'],
};
