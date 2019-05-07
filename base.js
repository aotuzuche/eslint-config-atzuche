module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        printWidth: 100,
        useTabs: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        rangeStart: 0,
        rangeEnd: Infinity,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf'
      }
    ],
    semi: ['error', 'never'],
    'template-curly-spacing': 'off',
    complexity: ['error', 100],
    indent: 'off',
    'no-param-reassign': 0,
    'no-extend-native': 0,
    'no-script-url': 0,
    'no-proto': 'error'
  }
}
