import { CLASS_INFO, UniversityLibrarian } from "../classes";

let mySymbol = Symbol('first_symbol');
let anotherSymbol = Symbol('first_symbol');

console.log(mySymbol === anotherSymbol);
console.log(typeof mySymbol);

let myObject = {
    [mySymbol]: 'value for symbol key'
}

// console.log(myObject[mySymbol]);

let librarian = new UniversityLibrarian();
librarian[CLASS_INFO]();

let libraryCustomer = {
    name: 'Paul'
};

if (libraryCustomer instanceof UniversityLibrarian) {
    console.log('A helpful librarian.');
} else {
    console.log('Not a librarian.');
}