const isValidTriangle = (sides) => {

    if (sides[0] <= 0) {
        return false;
    }

    if ((sides[0] + sides[1]) < sides[2]) {
        return false;
    }

    return true;
}

export default class Triangle {

    constructor(a, b, c) {
        this.sides = [a, b, c].sort((a,b) => a - b );
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
