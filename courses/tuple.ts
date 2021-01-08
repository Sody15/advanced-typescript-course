import { lineBreak } from '../global';
import { Book } from '../interfaces';
import { GetAllBooks } from '../utilityFunctions';

let myTuple: [number, string] = [10, 'Macbeth'];

console.log(myTuple[0]);
console.log(myTuple[1]);
lineBreak();

let booksRead: Book[] = GetAllBooks();

let [ book1 ] = booksRead;

let catalogLocation: [string, Book] = ['A 123.456', book1];

console.log(catalogLocation);