"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const global_1 = require("../global");
const utilityFunctions_1 = require("../utilityFunctions");
let allBooks = utilityFunctions_1.GetAllBooks();
let allMagazines = utilityFunctions_1.GetAllMagazines();
let readingMaterial = allBooks[0];
readingMaterial = allMagazines[0];
console.log(readingMaterial);
global_1.lineBreak();
// Union Types
function PrintTitle(item) {
    console.log(item.title);
    global_1.lineBreak();
}
PrintTitle(allBooks[0]);
PrintTitle(allMagazines[0]);
// Intersection Types
let serialNovel = {
    id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction, publisher: 'Smartpress'
};
function CreateCoolNewDevice(obj) {
    console.log(obj);
    global_1.lineBreak();
}
CreateCoolNewDevice(serialNovel);
//# sourceMappingURL=union-types.js.map