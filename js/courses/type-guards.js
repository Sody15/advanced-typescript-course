"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
const utilityFunctions_1 = require("../utilityFunctions");
// typeof - use with primitives
let x = 123;
if (typeof x === 'string') {
    console.log('x is a string');
}
else {
    console.log('x is a number');
}
// instanceof - use with non-primitives
class Phone {
    callSomeone() {
        console.log('make call');
    }
}
class Tablet {
    watchMovie() {
        console.log('watch movie');
    }
}
let device = new Phone();
if (device instanceof Phone) {
    device.callSomeone();
}
// Another example of instancof
let lib = new classes_1.PublicLibrarian();
if (lib instanceof classes_1.UniversityLibrarian) {
    lib.assistFaculty();
}
if (lib instanceof classes_1.PublicLibrarian) {
    lib.teachCommunity();
}
function isVehicle(v) {
    return v.numberOfWheels !== undefined;
}
// Custom type-guard
function isBook(text) {
    return text.author !== undefined;
}
let readingMaterial = utilityFunctions_1.GetAllBooks()[0];
if (isBook(readingMaterial)) {
    console.log(`The book's author is ${readingMaterial.author}.`);
}
else {
    console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
}
//# sourceMappingURL=type-guards.js.map