const isValidTriangle = (sides) => {
    if (![...sides].every(side => side > 0)) {
        return false;
    }

    let largest = sides.splice(sides.indexOf(Math.max(...sides)), 1);

    if ((sides[0] + sides[1]) < largest) {
        return false;
    }

    return true;
}

export default class Triangle {

    constructor(a, b, c) {
        this.sides = [a, b, c];
    }

    kind() {
        if (!isValidTriangle([...this.sides])) {
            throw new Error("Not a valid Triangle!");
        }

        let sides = new Set(this.sides);

        if (sides.size === 1) {
            return 'equilateral';
        }

        if (sides.size === 2) {
            return 'isosceles';
        }

        return 'scalene';
    }
}
