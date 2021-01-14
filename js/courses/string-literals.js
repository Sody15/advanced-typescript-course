"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const util = require("../utilityFunctions");
let empCategory1 = 'Non-Manager';
let empCategory2 = "Manager";
function GetEmployeeByCategory(category) {
}
let allBooks = util.GetAllBooks();
let allMagazines = util.GetAllMagazines();
let readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
let serialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press'
};
//# sourceMappingURL=string-literals.js.map