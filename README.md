# Българската азбука за деца ([Демо](http://dzhavatushev.eu/alphabet/))
Весел начин да научиш българската азбука / Fun way to learn the bulgarian alphabet

## Как можеш да се включиш?

Ето няколко примерни задачи, с които можеш да започнеш. Ако решиш да се заемеш с някоя от тях, отвори нов [Issue](https://github.com/dzhavat/bulgarian-alphabet/issues).

- [ ] Подходяща снимка за всяка буква (в [Flickr](https://www.flickr.com/search/?license=2%2C3%2C4%2C5%2C6%2C9&text=&advanced=1) има много, които са под Creative Common лиценз и могат да се използват свободно с некомерсиална цел)
- [ ] Добавяне на hover ефект
- [x] Запис на начина на изговаряне на всяка буква
- [ ] Дизайн, който е атрактивен за деца (с повече цветове)
- [ ] По-интересен дизайн на заглавието
- [ ] Анимация, която да показва начина на изписване на всяка буква
- [x] Проучване дали native аудио е добре поддържано от различните браузъри и платформи или трябва да се използва библиотека
  - PR #1
- [x] Проучване за най-поддържаните аудио формати
  - Изглежда, че [mp3](http://caniuse.com/#feat=mp3) има доста добра поддръжка
- [ ] Функция, която да изпълни цялата азбука без прекъсване
- [ ] Анимиране на аудио иконката при изпълнение на кликнатата буква

## Как да подкараш проекта
1. Клонирай хранилището
2. Отвори `cmd`/`Bash`/`Terminal` и навигирай до главната папка
3. Изпълни `npm install`
4. Изпълни `npm run build`
5. Накрая изпълни `npm start`
6. Страницата автоматично ще се отвори в браузъра

Основният JavaScript файл е `js/main.dev.js`. За да се компилира при запазване, изпълни `npm run watch-js` в отделен `cmd`/`Bash`/`Terminal` прозорец.

\* За да използваш **npm**, трябва да имаш инсталиран [Node.js] (https://nodejs.org/en/).
