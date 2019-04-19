module.exports = {
  extends: ['eslint-config-alloy/react', './base.js', 'prettier/react'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]
  }
}
