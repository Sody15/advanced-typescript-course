import { Category } from "../enums";
import { GetBookTitlesByCategory } from "../utilityFunctions";

// Callback function definition
interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {

    setTimeout(() => {
        try {
            let foundBooks: string[] = GetBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            } else {
                throw new Error('No books found');
            }

        } catch (error) {
            callback(error, null);
        }
    }, 2000);

}

function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(`Found the following titles:`);
        console.log(titles);
    }
}

console.log('Search is beginning...');
getBooksByCategory(Category.Fiction, logCategorySearch);
console.log('Search has been submitted.');