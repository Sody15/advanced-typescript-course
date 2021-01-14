"use strict";
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
console.log('\nSearch is beginning...');
getBooksByCategory(enums_1.Category.Fiction)
    .then((titles) => {
    console.log(`Found titles: ${titles}`);
    return titles.length;
})
    .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search has been submitted.');
//# sourceMappingURL=promises.js.map