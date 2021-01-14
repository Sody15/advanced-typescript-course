class LibraryBook {
    Checkout() {
        console.log('Checking out a book');
        return this;
    }
    Checkin() {
        // console.log('Checking in a book');
        if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking in a ElectronicBook');
        }
        return this;
    }
}
class ChildrensBook extends LibraryBook {
    Clean() {
        console.log('Cleaning a book');
        return this;
    }
}
class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() {
        console.log('Removing book from device');
        return this;
    }
}
let kidsBook = new ChildrensBook();
kidsBook.Checkin()
    .Clean()
    .Checkout();
let eBook = new ElectronicBook();
eBook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();
//# sourceMappingURL=polymorphism.js.map