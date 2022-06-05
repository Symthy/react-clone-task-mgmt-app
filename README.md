# react-clone-task-mgmt-app

react practice

- Todo memo:
  - Vite に移行
  - alias 設定
  - package.json の scripts

## Remarks

react down grade because use react-beautiful-dnd

before (v18)

```json
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
```

after (v17)

```json
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-beautiful-dnd": "^13.1.0",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^0.2.4"
```

※ react-beautiful-dnd と `<ul>`, `<li>` 要素の相性は悪い（表示が崩れる）。スタイルリセットすれば回避できるかもしれないが…。そうするかはプロダクトの開発方針次第。
