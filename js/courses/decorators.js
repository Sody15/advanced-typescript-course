"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writable = exports.logger = exports.sealed = void 0;
const classes_1 = require("../classes");
// This function is imported in classes.ts and used on the UniversityLibrarian class
// export function sealed(target: Function): void {
//     console.log('Sealing the constructor.');
//     Object.seal(target);
//     Object.seal(target.prototype);
// }
// let lib1 = new UniversityLibrarian();
// Class Factory Decorator
function sealed(name) {
    return function (target) {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
function logger(target) {
    let newConstructor = function () {
        console.log(`Creating new instance`);
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
let lib1 = new classes_1.UniversityLibrarian();
let lib2 = new classes_1.PublicLibrarian();
// Property decorators
function MyPropertyDecorator(target, propertyKey, parameterIndex) {
}
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(`Setting ${propertyKey}`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
}
catch (error) {
    console.log(error.message);
}
lib1.assistFaculty();
lib2.teachCommunity();
//# sourceMappingURL=decorators.js.map