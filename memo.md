# memo

## React Tips

### state hook で array の中身だけ変えても再描画はされない

[React の state hook で array を更新しても再描画がされない問題](https://gotohayato.com/content/509/)

中身だけ変えても検知されない

[公式 Doc: Bailing out of a state update](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update)

※useReducer だけでなく useState にもあてはまる

```javascript
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const addTask = (newTaskName: string) => {
    tasks.push(
      {
        id: tasks.length + 1,
        name: newTaskName,
      }
    )
    setTasks(tasks);
  };
```

```javascript
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const addTask = (newTaskName: string) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: newTaskName,
      },
    ]);
  };
```

## 設定関係

### CSS

Sass を使いたいなら以下を実行

```
npm install sass
```

フォーマットするなら stylelint を入れる

https://stylelint.io/about/linting/#pretty-printers

https://github.com/stylelint/stylelint

```
npm i -D stylelint stylelint-config-standard stylelint-scss stylelint-config-standard-scss stylelint-config-prettier
```

vscode の settings.json に以下設定

```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // ESLingも使っていれば
    "source.fixAll.stylelint": true // Stylelint プラグインでフォーマットする
  },
  // 以下を入れたら保存した際にフォーマットされるようになった
  "stylelint.validate": ["css", "scss"],
  "scss.validate": false,
  "css.validate": false,

```

refs:

- ★[Prettier と ESLint・Stylelint の併用](https://rinoguchi.net/2021/12/prettier-eslint-stylelint.html)
- [Stylelint 14 での SCSS と CSS-in-JS の設定方法](https://blog.gaji.jp/2021/12/07/8718/)
- [Stylelint(14 系)を SCSS と VSCode に導入する 2022](https://zenn.dev/knknk98/articles/422034ea94dc78)
- [Stylelint を使うなら必ず知るべき設定方法と 99 のルール](https://iwb.jp/css-stylelint-vscode-settings-rules/#Stylelint-2)
- [CSS Modules で CSS を書く時に実務で必要になる書き方まとめ](https://satoshimurata.com/css-modules-sample)
- [Nuxt + Stylelint + Prettier + VSCode で、保存時に SCSS を自動フォーマットする](https://toragramming.com/web/nuxtjs/nuxt-stylelint-prettier-vscode-format-scss-on-save/)

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

### react-create-app プロジェクト alias 設定

[react-create-app で作成したプロジェクトに import の alias を設定する](https://zukucode.com/2021/06/react-create-app-import-alias.html)

```
npm install -D @craco/craco
```

## 素材

- [O-DAN](https://o-dan.net/ja/)

  - フリーの背景画像

- [Font Awesome](https://fontawesome.com/)
  - アイコン集。導入は以下

```
npm install @fortawesome/react-fontawesome
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons
```

ref: [【React】FontAwesome の使い方（同じ名前のアイコンをインポートする場合もあり）
](https://de-milestones.com/react-fontawesome/)

## 気を付けるところ

[eslint-plugin-jsx-a11y を導入する](https://www.webneko.dev/posts/setup-eslint-to-audit-accessibility)

[react/button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
