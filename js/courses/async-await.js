"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const utilityFunctions_1 = require("../utilityFunctions");
function getBooksByCategory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = utilityFunctions_1.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}
function logSearchResutls(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let foundBooks = yield getBooksByCategory(bookCategory);
            console.log(foundBooks);
        }
        catch (error) {
            console.log(error);
        }
    });
}
console.log('Search is beginning...');
logSearchResutls(enums_1.Category.Fiction);
console.log('Search has been submitted.');
//# sourceMappingURL=async-await.js.map