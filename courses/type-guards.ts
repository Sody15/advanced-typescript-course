import { PublicLibrarian, UniversityLibrarian } from "../classes";
import { Book, Librarian, Magazine } from "../interfaces";
import { GetAllBooks } from "../utilityFunctions";

// typeof - use with primitives
let x: string | number = 123;

if (typeof x === 'string') {
    console.log('x is a string');
} else {
    console.log('x is a number');    
}

// instanceof - use with non-primitives
class Phone {
    callSomeone() {
        console.log('make call');
    }
}

class Tablet {
    watchMovie() {
        console.log('watch movie');
    }
}

let device: Phone | Tablet = new Phone();

if (device instanceof Phone) {
    device.callSomeone();
}

// Another example of instancof
let lib: Librarian = new PublicLibrarian();

if (lib instanceof UniversityLibrarian) {
    lib.assistFaculty();
}

if (lib instanceof PublicLibrarian) {
    lib.teachCommunity();
}

// User defined type-guard
interface Vehicle { numberOfWheels: number; }

function isVehicle(v: any): v is Vehicle {
    return (<Vehicle>v).numberOfWheels !== undefined;
}

// Custom type-guard
function isBook(text: Book | Magazine): text is Book {
    return (<Book>text).author !== undefined;
}

let readingMaterial: Book | Magazine = <any>GetAllBooks()[0];

if (isBook(readingMaterial)) {
    console.log(`The book's author is ${readingMaterial.author}.`);
} else {
    console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
}