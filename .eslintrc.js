module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0
  }
};
