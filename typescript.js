module.exports = {
  extends: ['alloy', 'alloy/typescript', 'prettier/@typescript-eslint', './base.js'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/no-require-imports': 'off',
  },
}
