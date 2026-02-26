function isNonEmptyStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.length > 0 && arr.every(entry => typeof entry === 'string');
}

let arr: unknown = ['test1', 'test2'];

if (isNonEmptyStringArray(arr)) {
    console.log(arr.length);
}