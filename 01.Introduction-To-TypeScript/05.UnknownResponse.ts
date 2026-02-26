function unknowResponse(args: unknown): string {
    if (typeof args === 'object' &&
        args !== null &&
        'value' in args &&
        typeof args['value'] === 'string') {
        return args.value;
    }

    return '-';
}

console.log(unknowResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknowResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));