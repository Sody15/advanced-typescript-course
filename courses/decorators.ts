import { PublicLibrarian, UniversityLibrarian } from "../classes";

// This function is imported in classes.ts and used on the UniversityLibrarian class
// export function sealed(target: Function): void {
//     console.log('Sealing the constructor.');
//     Object.seal(target);
//     Object.seal(target.prototype);
// }

// let lib1 = new UniversityLibrarian();

// Class Factory Decorator
export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {

    let newConstructor: Function = function() {
        console.log(`Creating new instance`);
        console.log(target);
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    return <TFunction>newConstructor;

}

let lib1 = new UniversityLibrarian();

let lib2 = new PublicLibrarian();


// Property decorators
function MyPropertyDecorator(target: Object, propertyKey: string, parameterIndex: number) {

}

export function writable(isWritable: boolean) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey}`);
        descriptor.writable = isWritable;
    }
}

try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
} catch (error) {
    console.log(error.message);
}

lib1.assistFaculty();
lib2.teachCommunity();