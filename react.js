module.exports = {
  plugins: ['react-hooks'],
  extends: ['alloy', 'alloy/react', 'prettier/react', './base.js'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'error',
    // 兼容旧的项目，暂时关掉
    'react/no-unsafe': 'off',
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'instance-methods',
          'everything-else',
          'render',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'no-invalid-this': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
