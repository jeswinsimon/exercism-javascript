export function compute(left, right) {
    const leftStrand = left.split('');
    const rightStrand = right.split('');

    if (leftStrand.length !== rightStrand.length) {
        if (leftStrand.length === 0) {
            throw new Error('left strand must not be empty');
        }
        else if (rightStrand.length === 0) {
            throw new Error('right strand must not be empty');
        }
        throw new Error('left and right strands must be of equal length');
    }

    let count = 0;
    leftStrand.map((lt, index) => {
        if (rightStrand[index] !== lt) {
            count += 1;
        }
    });
    return count;
}