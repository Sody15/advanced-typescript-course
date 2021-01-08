import { Category } from '../enums';
import { lineBreak } from '../global';
import { Book, Magazine } from "../interfaces";
import { GetAllBooks, GetAllMagazines } from "../utilityFunctions";

let allBooks: Book[] = GetAllBooks();
let allMagazines: Magazine[] = GetAllMagazines();

let readingMaterial: Book | Magazine = allBooks[0];
readingMaterial = allMagazines[0];
console.log(readingMaterial);
lineBreak();

// Union Types
function PrintTitle(item: Book | Magazine) {
    console.log(item.title);
    lineBreak();
}

PrintTitle(allBooks[0]);
PrintTitle(allMagazines[0]);

// Intersection Types
let serialNovel: Book & Magazine = { 
    id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction, publisher: 'Smartpress' 
};

function CreateCoolNewDevice(obj: Book & Magazine): void {
    console.log(obj);
    lineBreak();
}

CreateCoolNewDevice(serialNovel);