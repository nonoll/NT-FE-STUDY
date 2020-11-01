module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    'jest/globals': true
  },
  extends: ['tui/es6'],
  plugins: ['jest'],
  rules: {
    // eslint-disable-next-line object-property-newline
    'indent': [2, 2, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1}],
    'semi': 2,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
};
