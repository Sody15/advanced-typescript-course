import { UniversityLibrarian } from "../classes";
import { Book } from "../interfaces";
import '../LibrarianExtension';

// let mergedBook: Book;
// mergedBook.publisher = 'Programming Press';

let newLibrarian = new UniversityLibrarian();
newLibrarian.phone = '555-2134';
newLibrarian.hostSeminar('British Literature');