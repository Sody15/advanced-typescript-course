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

console.log('\nSearch is beginning...');
getBooksByCategory(Category.Fiction)
    .then((titles) => {
        console.log(`Found titles: ${titles}`);
        return titles.length;
    })
    .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search has been submitted.');