
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2020'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    semi: ['error', 'never'],
    'no-duplicate-imports': 'error',
    strict: 'error',
    'sort-imports': 'error',
    'import/order': 'off',
    'no-tabs': 'off'
  }
}
