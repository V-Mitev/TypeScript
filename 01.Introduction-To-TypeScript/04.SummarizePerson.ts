function summarizePerson(id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {
    return [
        id,
        middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`,
        age,
        hobbies && hobbies.length > 0 ? hobbies.join(', ') : '-',
        workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'
    ]
}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(12, 'Eliot', 'Des', 20));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));