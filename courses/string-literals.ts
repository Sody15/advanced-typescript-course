import { Category } from "../enums";
import { Book, Magazine } from "../interfaces";
import * as util from "../utilityFunctions";

type EmpCategory = 'Manager' | 'Non-Manager';

let empCategory1: EmpCategory = 'Non-Manager';
let empCategory2: EmpCategory = "Manager";

function GetEmployeeByCategory(category: EmpCategory): void {
    
}

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: PrintMaterial = allBooks[0];

function PrintTitle(item: PrintMaterial) {
    console.log(item.title);
}

let serialNovel: Serial = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction,
    publisher: 'Serial Press'
};

type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;