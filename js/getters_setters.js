'use strict'
// https://learn.javascript.ru/property-accessors
// Свойства-аксессоры представлены методами: «геттер» – для чтения
// и «сеттер» – для записи.  При литеральном объявлении объекта они
// обозначаются get и set:

// let obj = {
//     get propName() {
//         // геттер, срабатывает при чтении obj.propName
//     },
//
//     set propName(value) {
//         // сеттер, срабатывает при записи obj.propName = value
//     }
// };


// Например, у нас есть объект user со свойствами name и surname:


// let user = {
//     name: "Vladimir",
//     surname: "Shaitan"
// };

// Для того чтобы не хранить третье свойство 'fullName' (это не нужно так как
// оно будет состоять из 2х которые уже существуют) создадим getter

// let user = {
//     name: "Vladimir",
//     surname: "Shaitan",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// alert(user.fullName); // Vladimir Shaitan


// Если попробуем изменить свойство fullName то не получится, так как оно не хранится
// в объекте, а вычисляется

// user.fullName = "Тест" // Error - У свойства только геттер


// А теперь делаем чтобы работало создаем сеттер

//
// let user = {
//     name: "Vladimir",
//     surname: "Shaitan",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     set fullName(value) {
//         this.name = value.split(" ")[0];
//         this.surname = value.split(" ")[0];
//         // [this.name, this.surname] = value.split(" ");
//     }
// };
//
// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";
//
// alert(user.name); // Alice
// alert(user.surname); // Cooper