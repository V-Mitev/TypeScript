class Task {
    private title: string;
    private description: string;
    private completed: boolean;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.completed = false;
        this._createdBy = createdBy;
        this.description = description;
    }


    public get createdBy(): string {
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = true;
    }

    public getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed}`;
    }

    public static createSampleTasks(): Task[] {
        const task1 = new Task("Test 1", "Test Description", "Me");
        const task2 = new Task("Test 2", "Test Description 2", "You");

        return [task1, task2];
    }
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));