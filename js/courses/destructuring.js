"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = require("../global");
// Destructuring arrays
const numArr = ['one', 'two', 'three', 'four'];
let [one, two, three, four] = numArr;
console.log(one);
console.log(four);
global_1.lineBreak();
// Rest parameter
let [a, b, ...others] = numArr;
console.log(a);
console.log(b);
console.log(others);
global_1.lineBreak();
// Destructuring Objects
let person = {
    pName: 'Audrey',
    address: '123 Main Street',
    phone: '555-1212'
};
let { pName, address, phone } = person;
console.log(pName);
console.log(address);
console.log(phone);
global_1.lineBreak();
let books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: 'Fiction' },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: 'Fiction' },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: 'Poetry' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: 'Fiction' }
];
let [book1] = books;
let { title, author } = book1;
console.log(title);
console.log(author);
global_1.lineBreak();
//# sourceMappingURL=destructuring.js.map