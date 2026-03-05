function optionalMultiplier(val1?: string | number, val2?: string | number, val3?: string | number): number {
    const arr = [val1, val2, val3].filter(x => x !== undefined).map(Number);

    if (arr.length === 0) {
        return 1;
    }

    return arr.reduce((acc, c) => acc * c, 1);
}

console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());