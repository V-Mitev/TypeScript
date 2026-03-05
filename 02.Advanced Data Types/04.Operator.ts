function operator(param: string | string[] | number, operation: 'Add' | 'Length' | 'Index', operand: number): string | number {

    if (operation === 'Index' && typeof param !== 'number') {
        return param[operand];
    } else if (operation === 'Length' && typeof param !== 'number') {
        return param.length % operand;
    } else {
        return Number(param) + operand;
    }
}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator('11', 'Add', 3));