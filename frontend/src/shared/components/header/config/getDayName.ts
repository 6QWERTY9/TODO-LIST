export function getDayName(): string {
    const today = new Date();

    const daysOfWeekInRussian: string[] = [
        'Воскресенье', // 0
        'Понедельник', // 1
        'Вторник',     // 2
        'Среда',       // 3
        'Четверг',     // 4
        'Пятница',     // 5
        'Суббота'      // 6
    ];
    const dayIndex: number = today.getDay();

    const dayName: string = daysOfWeekInRussian[dayIndex];

    return dayName;
}