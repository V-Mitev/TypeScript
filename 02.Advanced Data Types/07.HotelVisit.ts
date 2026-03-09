type TrainWithPass = {
    number: 1,
    hallway: 'A',
    train(): void,
    pass: 'Guest'
};

type TrainWithoutPass = {
    number: 1,
    hallway: 'C',
    train(): void
};

type DineWithPass = {
    number: 2,
    hallway: 'A',
    dine(): void,
    pass: 'Guest'
};

type DineWithoutPass = {
    number: 2,
    hallway: 'C',
    dine(): void
};

type Sleep = {
    number: 3,
    hallway: 'A' | 'C',
    sleep(): void
};

function visitFloor(floor: TrainWithoutPass | TrainWithPass | DineWithoutPass | DineWithPass | Sleep) {
    switch (floor.number) {
        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;
    }
}
