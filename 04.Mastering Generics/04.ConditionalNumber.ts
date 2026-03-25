type DetermineParamType<T> =
    T extends number ? number :
    T extends string ? string :
    never;

function conditionalNumber<T>(input: DetermineParamType<T>): void {
    if (typeof input === 'number') {
        console.log(input.toFixed(2));
    } else {
        console.log(input);
    }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
// conditionalNumber<boolean>('a string'); // TS Error