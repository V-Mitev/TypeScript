export { }

class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        if (username.length < 3)
            throw new Error('Error: Username must be at least 3 characters long');

        this._username = username;
    }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

const user2 = new User("Joy");
console.log(user2.username);

const user3 = new User("Martin");
user.username = "Do";