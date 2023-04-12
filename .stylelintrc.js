module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines', // NOTE: Style Guide (https://www.gaji.jp/blog/2022/02/08/9086/)
  ],
  rules: {
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    'scss/selector-no-union-class-name': true,
    // シングルクォーテーションに統一
    'string-quotes': 'single',
    // import時の`_`を許容する
    'scss/at-import-no-partial-leading-underscore': null,
  },
  ignoreFiles: ['**/node_modules/**'],
};