function at(hours, minutes = 0) {

    let totalMinutes = correctMinutes((hours * 60) + minutes);

    return {
        totalMinutes,
        plus: min => at(0, totalMinutes + min),
        minus: min => at(0, totalMinutes - min),
        equals: at => at.totalMinutes === totalMinutes,
        toString: () => {
            let { hours, minutes } = minToHrMin(totalMinutes);
            return `${toTwoDigits(hours)}:${toTwoDigits(minutes)}`
        }
    }
}

const correctMinutes = (min) => {
    let minutes = min % 1440;
    return minutes < 0 ? 1440 + minutes : minutes;
}

const minToHrMin = (min) => {
    return { hours: Math.floor(min / 60), minutes: min % 60 };
}

const toTwoDigits = (num) => (num < 10 ? '0' : '') + num;

export { at };