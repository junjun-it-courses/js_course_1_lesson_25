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
//     surname: "Shaitan",
//     fullName: "Vladimir Shaitan"
// };

// Для того чтобы не хранить третье свойство 'fullName' (это не нужно так как
// оно будет состоять из 2х которые уже существуют) создадим getter

// let user = {
//     name: "Vladimir",
//     surname: "Shaitan",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     getFullName() {
//         return this.name + ' ' + this.surname
//     }
// };
//
// user.name = 'vova';
//
// for(let key in user) {
//     console.log(key, user[key])
// }


// console.log(user.fullName); // Vladimir Shaitan
// console.log(user.getFullName()); // Vladimir Shaitan

// console.log(user)


// Если попробуем изменить свойство fullName то не получится, так как оно не хранится
// в объекте, а вычисляется

// user.fullName = "Тест" // Error - У свойства только геттер


// А теперь делаем чтобы работало создаем сеттер


let user = {
    name: "Vladimir",
    surname: "Shaitan",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {

        // console.log(value)
        this.name = value.split(" ")[0];
        this.surname = value.split(" ")[1];
        // [this.name, this.surname] = value.split(" ");
    }
};

// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
console.log(user.fullName); // Alice Cooper