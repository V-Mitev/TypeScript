type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function isUserValid(user: User): boolean {
    if (typeof user.id === 'string' && user.id.length !== 14) {
        return false;
    } else if (typeof user.id === 'number' && user.id < 100) {
        return false;
    } else if (user.username.length < 5 || user.username.length > 10) {
        return false;
    } else if (typeof user.passwordHash === 'string' && user.passwordHash.length !== 20) {
        return false;
    } else if (Array.isArray(user.passwordHash) &&
        user.passwordHash.length !== 4 &&
        user.passwordHash.every(el => typeof el === 'string')) {
        return false;
    } else if (user.status === 'Deleted') {
        return false;
    }

    return true;
}

console.log(isUserValid({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(isUserValid({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }));
console.log(isUserValid({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(isUserValid({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' }));
console.log(isUserValid({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' }));
console.log(isUserValid({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }));