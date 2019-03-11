export const steps = (num, count = 0) => {
    if (num < 1) {
        throw new Error("Only positive numbers are allowed");
    }
    if (num === 1) {
        return count;
    }
    
    if (num % 2 === 0) {
        return steps(num / 2, count += 1);
    }
    return steps((3 * num) + 1, count += 1);
}