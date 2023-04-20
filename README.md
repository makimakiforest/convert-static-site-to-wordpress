# convert-static-site-to-wordpress

## 使用技術

[![Sass](https://img.shields.io/badge/sass-compiler-dimgray?style=for-the-badge&logo=sass)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Javascript](https://img.shields.io/badge/javascript-language-dimgray?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Github Actions](https://img.shields.io/badge/github_actions-ci/cd-dimgray?style=for-the-badge&logo=github)](https://github.com/features/actions)
[![NPM](https://img.shields.io/badge/npm-package_manager-dimgray?style=for-the-badge&logo=npm)](https://www.npmjs.com/)

### 開発セットアップ

パッケージマネージャは[npm](https://www.npmjs.com/)を採用
下記のコマンドで`node_modules`をインストール

```bash
npm i
```

### Sass のコンパイル

```bash
npm run compile:sass
```

### ブランチの切り方

- 基本的には`main`ブランチから切るが、規模が大きくなる場合や作業が重複する場合のみ子ブランチから切っても良い。
- ブランチ名は`feature/×××`に統一

### PR の運用

- `main`ブランチにマージする時のみ自分を除く１名の`Approved`が必須
  (Free プランなので各自でマージ出来てしまいますが、極力避けてください）
- `main`ブランチへの直 Push は禁止
- `Approved`後は PR 作成者がマージしてください
