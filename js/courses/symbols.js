"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
let mySymbol = Symbol('first_symbol');
let anotherSymbol = Symbol('first_symbol');
console.log(mySymbol === anotherSymbol);
console.log(typeof mySymbol);
let myObject = {
    [mySymbol]: 'value for symbol key'
};
// console.log(myObject[mySymbol]);
let librarian = new classes_1.UniversityLibrarian();
librarian[classes_1.CLASS_INFO]();
let libraryCustomer = {
    name: 'Paul'
};
if (libraryCustomer instanceof classes_1.UniversityLibrarian) {
    console.log('A helpful librarian.');
}
else {
    console.log('Not a librarian.');
}
//# sourceMappingURL=symbols.js.map