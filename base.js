module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 100,
        useTabs: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        rangeStart: 0,
        rangeEnd: Infinity,
        requirePragma: true,
        insertPragma: true,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
      },
    ],
    semi: [ 'error', 'never' ],
    'template-curly-spacing': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    'switch-colon-spacing': [ 'error', { after: true, before: false } ],
    'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
    complexity: [ 'error', 100 ],
    'no-param-reassign': 0,
    'no-extend-native': 0,
    'no-script-url': 0,
    'no-proto': 'error',
    quotes: [ 2, 'single' ],
    'key-spacing': [ 2, { beforeColon: false, afterColon: true } ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-void': 0,
  },
}
