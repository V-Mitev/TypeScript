function dayOfTheWeek(day: number): void {
    enum daysOfTheWeek {
        'Monday' = 1,
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    };

    console.log(daysOfTheWeek[day] || 'error');
}

dayOfTheWeek(1);
dayOfTheWeek(5);
dayOfTheWeek(-1);