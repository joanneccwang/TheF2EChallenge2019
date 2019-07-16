# week1_pomodoro

> The F2E Challenge Week 1: Pomodoro

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 遇到的問題

- 怎麼 global 加入 scss 檔案讓每個 component 都引用？
[Globally Load SASS into your Vue.js Applications](https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/)

要記得加上分號，不然會噴 `Media query expression must begin with '('`

- 有設定 .eslintignore 但 vscode 似乎沒有 ignore 指定的資料夾？（eg. /build/）
原因是跟用 vscode 開的 working directory 有關，vscode 會讀 working directory root 下的設定，如果 .eslintrc, .eslintignore 是子資料夾的設定，可以用 vscode setting 中 `"eslint.workingDirectories"` 設定

- Vuex mutation 中要更改 state Object 的值會得到 linter 的 `no-param-reassign` warning
.eslintrc.js 加上 custom rule

``` js
'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        '_state', // for vuex state
      ],
}],
```
