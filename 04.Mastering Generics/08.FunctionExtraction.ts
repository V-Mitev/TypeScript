type AllFunctions<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K]
};

type Employee2 = {
    name: string,
    salary: number,
    work: () => void,
    takeBreak: () => string
};

const employee: Employee2 = {
    name: "John",
    salary: 5000,
    work: () => console.log("Working..."),
    takeBreak: () => "Break time"
};

function extractFunctions<T extends object>(obj: T): AllFunctions<T> {
    const result = {} as AllFunctions<T>;

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "function") {
            (result as any)[key] = value;
        }
    }

    return result;
}

const funcs = extractFunctions(employee);

console.log(funcs);