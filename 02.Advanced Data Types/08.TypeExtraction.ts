type PersonInfo = { getPersonInfo(): string };

type LocationInfo = { getAddressInfo(): string };

type FullInfo = PersonInfo & LocationInfo;

function createCombinedFunction(names: PersonInfo, location: LocationInfo) {
    return function (combinedPerson: FullInfo) {
        console.log(`Hello, ${combinedPerson.getPersonInfo()} from ${combinedPerson.getAddressInfo()}`);
    }
}

let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let userLocation = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}` } };

let combinedFunction = createCombinedFunction(names, userLocation);
let combinedPerson = Object.assign({}, names, userLocation) as FullInfo;
combinedFunction(combinedPerson);