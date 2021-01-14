import { Category } from "../enums";
import { GetBookTitlesByCategory } from "../utilityFunctions";

function getBooksByCategory(cat: Category): Promise<string[]> {

    let p: Promise<string[]> = new Promise((resolve, reject) => {

        setTimeout(() => {
            let foundBooks: string[] = GetBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject('No books found');
            }
        }, 2000);

    });

    return p;

}

async function logSearchResutls(bookCategory: Category) {
    try {
        let foundBooks = await getBooksByCategory(bookCategory);
        console.log(foundBooks);
    } catch(error) {
        console.log(error);
    }
}

console.log('Search is beginning...');
logSearchResutls(Category.Fiction);
console.log('Search has been submitted.');