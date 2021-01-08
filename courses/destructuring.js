"use strict";
exports.__esModule = true;
var global_1 = require("./global");
// Destructuring arrays
var numArr = ['one', 'two', 'three', 'four'];
var one = numArr[0], two = numArr[1], three = numArr[2], four = numArr[3];
console.log(one);
console.log(four);
global_1.lineBreak();
// Rest parameter
var a = numArr[0], b = numArr[1], others = numArr.slice(2);
console.log(a);
console.log(b);
console.log(others);
global_1.lineBreak();
// Destructuring Objects
var person = {
    pName: 'Audrey',
    address: '123 Main Street',
    phone: '555-1212'
};
var pName = person.pName, address = person.address, phone = person.phone;
console.log(pName);
console.log(address);
console.log(phone);
global_1.lineBreak();
var books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: 'Fiction' },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: 'Fiction' },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: 'Poetry' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: 'Fiction' }
];
var book1 = books[0];
var title = book1.title, author = book1.author;
console.log(title);
console.log(author);
