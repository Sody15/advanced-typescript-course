import { Category } from '../enums';
import { lineBreak } from '../global';
import { Book } from '../interfaces';


let newBookIds = [10, 20];

let allBookIds = [1, 2, 3, ...newBookIds];

console.log(allBookIds);
lineBreak();

let books1: Book[] = [
    { id: 10, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 11, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
];

let books2: Book[] = [
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
];

let booksRead: Book[] = [];
booksRead.push(...books1, ...books2);

console.log(booksRead);