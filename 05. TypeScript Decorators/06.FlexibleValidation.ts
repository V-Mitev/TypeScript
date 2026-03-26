function validateName(minLength: number) {
    return function (target: object, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function (newName: string) {
            if (newName.length < minLength) {
                throw new Error('Error: name must have a min length of 3 characters');
            }

            originalSet.call(this, newName);
        };

        return descriptor;
    }
}

function validateAge2(min: number, max: number) {
    return function (target: object, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function (newAge: number) {
            if (newAge < min || newAge > max) {
                throw new Error('Error: Age must be between 1 and 200');
            }

            originalSet.call(this, newAge);
        }

        return descriptor;
    }
}

function validatePassword(pattern: RegExp) {
    return function (target: object, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalSet = descriptor.set!;

        descriptor.set = function (newPassword: string) {
            if (!newPassword.match(pattern)) {
                throw new Error(`Error: password needs to match ${pattern}`);
            }

            originalSet.call(this, newPassword);
        };

        return descriptor;
    }
}

class User4 {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @validateName(3)
    set name(val: string) { this._name = val; }

    @validateAge2(1, 100)
    set age(val: number) { this._age = val; }

    @validatePassword(/^[a-zA-Z0-9]+$/g)
    public set password(v: string) { this._password = v; }


    get name() { return this._name; }
    get age() { return this._age; }
}

// minLength = 3
// min = 1, max = 100
// regex = /^[a-zA-Z0-9]+$/g
let user = new User4('John', 130, 'hardPassword12');
let user2 = new User4('John', 30, '!test');
let user3 = new User4('John', 25, '@werty');
let user4 = new User4('Jo', 20, 'password123');
