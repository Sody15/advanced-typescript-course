
class LibraryBook {

    Checkout(): this {
        console.log('Checking out a book');
        return this;
    }

    Checkin(): this {
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

    Clean(): this {
        console.log('Cleaning a book');
        return this;
    }
    
}

class ElectronicBook extends LibraryBook {

    RemoveFromCustomerDevice(): this {
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