"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../classes");
// This can live anywhere in your codebase: https://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
// Apply Mixins to UniversityLibrarian class. Now it has Employee and Researcher variables and functions.
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_1.UniversityLibrarian();
newLibrarian.doResearch('Economics');
newLibrarian.addToSchedule();
