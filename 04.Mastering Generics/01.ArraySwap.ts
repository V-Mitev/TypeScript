function swap<T>(
    aArr: T[],
    aIndex: number,
    bArr: T[],
    bIndex: number
): void {
    const temp: T = aArr[aIndex];

    aArr[aIndex] = bArr[bIndex];
    bArr[bIndex] = temp;
}

let a = [20, 30, 40];
let b = [1, 2, 3, 4, 5];
swap<number>(a, 0, b, 2);
console.log(a)
console.log(b)