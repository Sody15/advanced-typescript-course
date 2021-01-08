import { UniversityLibrarian, Employee, Researcher } from '../classes';

// This can live anywhere in your codebase: https://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
}


// Apply Mixins to UniversityLibrarian class. Now it has Employee and Researcher variables and functions.
applyMixins(UniversityLibrarian, [Employee, Researcher]);

let newLibrarian = new UniversityLibrarian();
newLibrarian.doResearch('Economics');
newLibrarian.addToSchedule();