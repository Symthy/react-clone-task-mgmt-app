# memo

## CSS 関係

Sass を使いたいなら以下を実行

```
npm install sass
```

フォーマットするなら stylelint を入れる

https://stylelint.io/about/linting/#pretty-printers

```

```

normalize.css を導入したいなら

```
npm i normalize.css

// 以下を index ファイルに追加
import "normalize.css";
```

背景画像の透過

```scss
bg {
  background-image: url(hogehoge.jpg);
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten; // 背景画像と背景色を混合
}
```

ref: [CSS で背景画像を透過しているように見せる方法](https://hirashimatakumi.com/blog/7003.html)

## 画像

[O-DAN](https://o-dan.net/ja/)

## 気を付けるところ

[eslint-plugin-jsx-a11y を導入する](https://www.webneko.dev/posts/setup-eslint-to-audit-accessibility)

[react/button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
