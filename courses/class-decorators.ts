function uielement(target: Function) {

}

function deprecated(t: any, name: string, descriptor: PropertyDescriptor) {
    console.log('This method will go away soon');
}

@uielement
class ContactForm {
    @deprecated
    someOldMethod() {
        
    }
}