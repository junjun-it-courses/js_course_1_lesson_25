'use strict'

// https://learn.javascript.ru/property-descriptors

// Если говорить о свойствах объекта то помимо данных ключ - значение у них так-же
// дополнительные настройки (флаги)

// writable – если true, свойство можно изменить, иначе оно только для чтения.

// enumerable – если true, свойство перечисляется в циклах, в противном случае
// циклы его игнорируют.

// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять,
// иначе этого делать нельзя.

// Все они принимают булиевое true/false


// А для того чтобы глянуть какие у свойства объекта есть настройки (флаги)
// мы можем вызвать метод Object.getOwnPropertyDescriptor(obj, propName)

// let obj = {
//     name: "Vlad",                       // Свойство объекта
//     getName() {                         // Метод объекта
//         return this.name;
//     }
// }
//
// let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(descriptor);

// Получим следующую информацию
// {
//     "value": "Vlad",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
// }

// В случае если на необходимо изменить насткойки (флаги) свойства объекта
// мы должны использовать метод Object.defineProperty(obj, propertyName, descriptor)

// При использовании метода 3 агрумент это объект с настройками и если мы не передадим
// в него какой-то флаг то он поумолчанию установится в false

// let user = {};
//
// Object.defineProperty(user, "name", {
//     value: "John",
//     writable: true
// });
//
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
//
// console.log(descriptor)


// Примеры
// Делаем свойтво объекта доступным для считываения но не изменения

// let user = {
//     name: "John"
// };
//
// Object.defineProperty(user, "name", {
//     writable: false
// });
//
// user.name = "Pete";
// // Ошибки в данном случае нету, но свойство не изменено
// // В режиме use strict ошибка будет выведена вв консоль
//
// console.log(user)

// let user = { };
//
// Object.defineProperty(user, "name", {
//     value: "John",
//     // для нового свойства необходимо явно указывать все
//     //  флаги, для которых значение true
//     enumerable: true,
//     configurable: true
// });
//
// console.log(user.name); // John
// user.name = "Pete"; // Ошибка


// enumerable - Неперечислимое свойство

// let user = {
//     name: "John",
//     getName() {
//         return this.name;
//     }
// };
//
// // По умолчанию оба свойства выведутся:
// for (let key in user) {
//     console.log(key)    // name, toString
// }
//
// console.log('--------enumerable flag changed---------')
//
// // но если мы изменим флаг enumerable
// Object.defineProperty(user, "getName", {
//     enumerable: false
// });
//
//
// // В данном случае у нас из перебора исключен метод getName
// for (let key in user) {
//     console.log(key)    // name, toString
// }


// configurable - Неконфигурируемое свойство
// Этот флаг иногда предустановлен для некоторых встроенных объектов и свойств.

// Например Math.PI
// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
//
// // Это значит что мы не можем его изменить
// console.log(descriptor);
//
// Math.PI = 3; // Ошибка

// Важно!! Если мы делаем свойстно неконфигурируемым то в дальнейшем мы не сможем
// изменить это настройку (если сделали неконфигурируемым то обратно
// изменить не получится только возвращаться и переписывать код)

// let user = { };
//
// Object.defineProperty(user, "name", {
//     value: "John",
//     writable: false,
//     configurable: false
// });
//
// // теперь невозможно изменить user.name или его флаги
// // всё это не будет работать:
// //   user.name = "Pete"
// //   delete user.name
// //   defineProperty(user, "name", ...)
//
// Object.defineProperty(user, "name", {writable: true}); // Ошибка


// Метод Object.defineProperties(obj, descriptors)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

// Позволяет определять множество свойств сразу.

// let user = {};
//
// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
// });
//
// console.log(user)
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// console.log(Object.getOwnPropertyDescriptor(user, 'surname'))



// Метод Object.getOwnPropertyDescriptors(obj)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
// Позволяет получить все дескрипторы свойств сразу,

// let user = {};
//
// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
// });
//
// console.log(Object.getOwnPropertyDescriptors(user))