const off = 'off'
// const warn = 'warn'
const error = 'error'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],

  rules: {
    '@typescript-eslint/interface-name-prefix': off,
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/explicit-module-boundary-types': off,
    '@typescript-eslint/no-explicit-any': off,

    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
    'import/order': [
      error,
      {
        groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups: [
          {
            pattern: '@[a-z]*/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'sibling',
            position: 'before',
          },
        ],
      },
    ],
  },
}
