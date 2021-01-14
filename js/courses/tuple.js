"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = require("../global");
const utilityFunctions_1 = require("../utilityFunctions");
let myTuple = [10, 'Macbeth'];
console.log(myTuple[0]);
console.log(myTuple[1]);
global_1.lineBreak();
let booksRead = utilityFunctions_1.GetAllBooks();
let [book1] = booksRead;
let catalogLocation = ['A 123.456', book1];
console.log(catalogLocation);
//# sourceMappingURL=tuple.js.map