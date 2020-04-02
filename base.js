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
        arrowParens: 'avoid',
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
        trailingComma: 'all',
      },
    ],
    // 类方法之间要换行，单行的除外（属性定义）
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    semi: ['error', 'never'],
    // 优先使用可选链，关闭，因为目前支持不太好，需要把eslint的parser换成babel-eslint，可能会造成其他规则有问题
    '@typescript-eslint/prefer-optional-chain': 'off',
    // 允许短链，允许三目
    'no-unused-expressions': 0,
    'template-curly-spacing': 'off',
    'object-curly-spacing': ['error', 'always'],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // 和 perttier 的冲突
    // 'array-bracket-spacing': ['error', 'always', { singleValue: false }],
    complexity: ['error', 100],
    'no-param-reassign': 0,
    'no-extend-native': 0,
    'no-script-url': 0,
    'no-proto': 'error',
    quotes: ['error', 'single'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
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
    // 不允许使用undefined，用void 0表示
    'no-undefined': ['error'],
    'no-void': 'off',
    // 逗号的空格规范，逗号前不允许加空格，逗号后强制加空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 数组的左括号右侧和右括号左侧不允许空格，不然的话数组套对象很丑
    'array-bracket-spacing': ['error', 'never'],
    'max-params': ['error', 4],
  },
}
