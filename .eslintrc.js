// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-unused-vars': 'warn',
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id']
      }
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    }
  }
}
