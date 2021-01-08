"use strict";
exports.__esModule = true;
var enums_1 = require("../enums");
var global_1 = require("../global");
var utilityFunctions_1 = require("../utilityFunctions");
var allBooks = utilityFunctions_1.GetAllBooks();
var allMagazines = utilityFunctions_1.GetAllMagazines();
var readingMaterial = allBooks[0];
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
var serialNovel = {
    id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction, publisher: 'Smartpress'
};
function CreateCoolNewDevice(obj) {
    console.log(obj);
    global_1.lineBreak();
}
CreateCoolNewDevice(serialNovel);
