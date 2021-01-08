"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var enums_1 = require("./enums");
var global_1 = require("./global");
var newBookIds = [10, 20];
var allBookIds = __spreadArrays([1, 2, 3], newBookIds);
console.log(allBookIds);
global_1.lineBreak();
var books1 = [
    { id: 10, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
];
var books2 = [
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
];
var booksRead = [];
booksRead.push.apply(booksRead, __spreadArrays(books1, books2));
console.log(booksRead);
