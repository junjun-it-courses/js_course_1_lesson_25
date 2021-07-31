'use strict'
// Помимо работы с определенными свойствами объекта, бывает такое что нам
// нужно работать с настройками самомго объекта

let Person = {
    firstName: 'Vlad',
    lastName: 'Shaitan',
    getFirstName() {
        return this.name;
    },
    getLastName() {
        return this.lastName
    },
    getFullName() {
        return this.lastName + ' ' + this.firstName;
    }
}

// Object.preventExtensions(obj) - Запрещает добавлять новые свойства в объект.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

// Object.preventExtensions(Person);
// Person.middleName = 'Sergeevich'; // Error in console


// Object.seal(obj) - Запрещает добавлять/удалять свойства.
// Устанавливает configurable: false для всех существующих свойств.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

// Object.seal(Person);

// delete Person.name;
// Person.name = 'Сын собаки';              // error
// Person.middleName = 'Sergeevich';        // error


// Object.freeze(obj) - Запрещает добавлять/удалять/изменять свойства.
// Устанавливает configurable: false, writable: false для всех существующих свойств.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// Object.freeze(Person);
//
// delete  Person.getFirstName;             // error
// Person.name = 'Сын собаки';              // error
// Person.middleName = 'Sergeevich';        // error



// Для проверки объекта на ограничения которое могут быть заданы предыдущими методами

// Object.isExtensible(obj) - Возвращает false, если добавление свойств запрещено, иначе true.

// Object.preventExtensions(Person);
// console.log(Object.isExtensible(Person))



// Object.isSealed(obj) - Возвращает true, если добавление/удаление свойств
// запрещено и для всех существующих свойств установлено configurable: false.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

// Object.seal(Person);
// console.log(Object.isSealed(Person))


// Object.isFrozen(obj) - Возвращает true, если добавление/удаление/изменение свойств
// запрещено, и для всех текущих свойств установлено configurable: false,
// writable: false.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen

// Object.freeze(Person)
// console.log(Object.isFrozen(Person))
