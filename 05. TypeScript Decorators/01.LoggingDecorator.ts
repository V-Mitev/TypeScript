function log(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);
        const result = originalMethod.call(this, args);
        return result;
    }

    return descriptor;
}

class Person1 {
    public fName: string;
    public lName: string;

    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName
    }

    @log
    public static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
}

let person1 = new Person1('John', 'Does');
Person1.getFullName(person1.fName, person1.lName)
Person1.getFullName('Benny', 'Tres');