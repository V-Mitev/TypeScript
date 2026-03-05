function reversedDayOfTheWeek(day: string): void {
    enum daysOfTheWeek {
        'Monday' = 1,
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    };

    console.log(daysOfTheWeek[day as keyof typeof daysOfTheWeek] || 'error');
}

reversedDayOfTheWeek('Monday');
reversedDayOfTheWeek('Friday');
reversedDayOfTheWeek('-1');