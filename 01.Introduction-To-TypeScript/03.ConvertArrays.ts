function convertArray(arr: string[]): [string, number] {
    const arrStr = arr.join('');

    return [
        arrStr,
        arrStr.length
    ]
}

console.log(convertArray(['How', 'are', 'you?']));
console.log(convertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));