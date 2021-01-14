"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const utilityFunctions_1 = require("../utilityFunctions");
function getBooksByCategory(cat, callback) {
    setTimeout(() => {
        try {
            let foundBooks = utilityFunctions_1.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            }
            else {
                throw new Error('No books found');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}
function logCategorySearch(err, titles) {
    if (err) {
        console.log(`Error message: ${err.message}`);
    }
    else {
        console.log(`Found the following titles:`);
        console.log(titles);
    }
}
console.log('Search is beginning...');
getBooksByCategory(enums_1.Category.Fiction, logCategorySearch);
console.log('Search has been submitted.');
//# sourceMappingURL=callbacks.js.map