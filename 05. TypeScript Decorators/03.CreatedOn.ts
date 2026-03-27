function addCreatedOn(constructor: { new(...args: any[]): User5 }) {
    return class extends constructor {
        createdOn = new Date();
    }
}

@addCreatedOn
class User5 {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayUserInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const usr = new User5("John Doe", 30);
usr.displayUserInfo()
console.log(usr);
console.log((usr as any).createdOn);
