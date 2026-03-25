enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('Runtime error: End date cannot be before start date');
        }

        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error('Runtime error: End date cannot be before start date');
        }

        this._end = val;
    }

    getInfo(): string {
        return `Holiday: ${this.getFullInfo(this._start)} - ${this.getFullInfo(this._end)}`;
    }

    private getFullInfo(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    private reservations: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.reservations.set(holiday, vacationType);
    }

    listReservations(): string {
        const allHolidays = Array.from(this.reservations.entries());

        return allHolidays
            .map(([holidayObj, vacationType]) =>
                `${holidayObj.getInfo()} => ${vacationType}`
            )
            .join('\n');
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());