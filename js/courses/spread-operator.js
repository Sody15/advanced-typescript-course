"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const global_1 = require("../global");
let newBookIds = [10, 20];
let allBookIds = [1, 2, 3, ...newBookIds];
console.log(allBookIds);
global_1.lineBreak();
let books1 = [
    { id: 10, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
];
let books2 = [
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
];
let booksRead = [];
booksRead.push(...books1, ...books2);
console.log(booksRead);
//# sourceMappingURL=spread-operator.js.map