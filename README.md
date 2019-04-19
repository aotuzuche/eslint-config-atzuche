# eslint-config-atzuche

基于 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 使用方法

### 标准规则

安装：

```bash
yarn add eslint eslint-config-atzuche -D
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['eslint-config-atzuche'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
};
```

### React

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['eslint-config-atzuche/react'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ],
    // // jsx 的 children 缩进必须为两个空格
    // 'react/jsx-indent': [
    //     'error',
    //     2
    // ],
    // // jsx 的 props 缩进必须为两个空格
    // 'react/jsx-indent-props': [
    //     'error',
    //     2
    // ]
  }
};
```

### TypeScript

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['eslint-config-atzuche/typescript'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
};
```

### TypeScript React


在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['eslint-config-atzuche/react', 'eslint-config-atzuche/typescript'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
};
```


### 在 VSCode 中使用

在 VSCode 中，默认 ESLint 并不能识别 `.vue`、`.ts` 或 `.tsx` 文件，需要在「文件 => 首选项 => 设置」里做如下配置：

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}
```

### VSCode 中的 autoFixOnSave 没有效果

如果需要针对 `.vue`、`.ts` 和 `.tsx` 文件开启 ESLint 的 autoFix，则需要配置成：

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```
