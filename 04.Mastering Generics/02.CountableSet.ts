interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private counterSet = new Map<T, number>();

    add(item: T): void {
        let count = this.counterSet.get(item);

        if (count !== undefined) {
            this.counterSet.set(item, ++count);
        } else {
            this.counterSet.set(item, 1);
        }
    }

    remove(item: T): void {
        let count = this.counterSet.get(item);

        if (count !== undefined && count > 0) {
            this.counterSet.set(item, --count);
        }
    }

    contains(item: T): boolean {
        const counter = this.counterSet.get(item);

        if (counter !== undefined && counter > 0) {
            return true;
        }

        return false;
    }

    getNumberOfCopies(item: T): number {
        const count = this.counterSet.get(item);

        if (count === undefined) {
            return 0;
        }

        return count;
    }
}

let countedSet = new CountedSet<string>();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test')
countedSet.remove('test')
countedSet.remove('test')
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));