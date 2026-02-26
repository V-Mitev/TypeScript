function friday13th(input: unknown): void {
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    if (Array.isArray(input)) {
        for (const date of input) {
            if (date instanceof Date &&
                date.getDay() === 5 &&
                date.getDate() === 13
            ) {
                console.log(`${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
            }
        }
    }
}

friday13th([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13)
]);