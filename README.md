FLUX - архитектура
---------------------
Задание по архитектуре для ШРИ-2018

* [DEMO](https://marfuzzi.github.io/ya_architecture_flux/)

**Production**
```
npm i
npm run build
```
**Development**
```
npm i
npm run start
```
Открываем по адресу http://localhost:9000

**Linter**
```
npm run lint
```

**Технологии**

* сборка Webpack
* препроцессор SASS
* eslint, csscomb (linter)
* Babel

**Описание**

Данное приложение демонстрирует собственную реализацию Flux фреймворка. Осуществляется отправка данных на сервер по нажатию на кнопку, а после успешной отправки, данные выводятся на экран. Каждый этап передачи данных и управления между элементами архитектуры логируется в консоль и на экран.

**Структура проекта**

* src/js/flux - содержит компоненты фреймворка.
* src/js/flux/Dispatcher - содержит класс Dispatcher.
* src/js/flux/Store - содержит класс Store.
* src/js/flux/Actions - содержит класс Actions.
* src/js/index.js - содержит класс View.
* src/js/Log.js - содержит класс для логирования.
