const bookList = document.querySelector('.books');
const books = document.querySelectorAll('.book');

const body = document.querySelector('body');
const bookList2 = books[0].querySelectorAll('ul > li');
const bookList5 = books[5].querySelectorAll('ul > li');
const bookList6 = books[2].querySelectorAll('ul > li');
const adv = document.querySelector('.adv');

// Восстановить порядок книг.
bookList.prepend(books[1]);
books[3].before(books[4]);
bookList.append(books[2]);

//Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

books[4].querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
adv.remove();

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

bookList2[9].insertAdjacentElement('beforeend', bookList2[2]);
bookList2[3].insertAdjacentElement('beforeend', bookList2[6]);
bookList2[6].insertAdjacentElement('beforeend', bookList2[8]);

bookList5[1].insertAdjacentElement('afterend', bookList5[9]);
bookList5[4].insertAdjacentElement('afterend', bookList5[2]);
bookList5[2].insertAdjacentElement('afterend', bookList5[6]);
bookList5[6].insertAdjacentElement('afterend', bookList5[7]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
bookList6[8].insertAdjacentElement('afterend', chapter8);