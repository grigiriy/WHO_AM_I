# Who / AM

### Installation

```
yarn install
```

### Start Dev Server

```
yarn start
```

### Build Prod Version

```
yarn build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- HTML loader via [html-loader](https://github.com/webpack-contrib/html-loader)

PRs log:
search_bug:

- обновлениа версия jQuery (3.5.0 -> 3.5.1)
- новый мета вьюпорт, предотвращающий автоматический зум в ios на инпуты
- скорректированы отступы в хедере, чтобы не вылезало из под бегущей строки
- временно отключен минификатор на билде - там странная ошибка - в отдельную ветку
