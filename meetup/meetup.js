const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDate = (day, order, startDate, adder = 1) => {
    let date = new Date(startDate.toISOString());
    while (order > 0) {
        if (date.getMonth() !== startDate.getMonth()) {
            throw new Error("Invalid Date")
        }
        if (date.getDay() === day) {
            order -= 1;
        }
        date.setDate(date.getDate() + adder);
    }
    date.setDate(date.getDate() - adder);
    return date;
};

const getEndDate = (date) => {
    let newDate = new Date(date.toISOString())
    newDate.setMonth(date.getMonth() + 1);
    newDate.setDate(0);
    return newDate;
}

export function meetupDay(year, month, day, order) {

    let date;

    switch (order) {
        case '1st':
            date = getDate(days.indexOf(day), 1, new Date(year, month, 1));
            break;
        case '2nd':
            date = getDate(days.indexOf(day), 2, new Date(year, month, 1));
            break;
        case '3rd':
            date = getDate(days.indexOf(day), 3, new Date(year, month, 1));
            break;
        case '4th':
            date = getDate(days.indexOf(day), 4, new Date(year, month, 1));
            break;
        case '5th':
            date = getDate(days.indexOf(day), 5, new Date(year, month, 1));
            break;
        case 'last':
            date = getDate(days.indexOf(day), 1, getEndDate(new Date(year, month, 1)), -1);
            break;
        case 'teenth':
            date = getDate(days.indexOf(day), 1, new Date(year, month, 13));
            break;
        default:
            throw new Error("Invalid Date");

    }

    return date;
} 