class Pangram {

    constructor(phrase) {
        this.phrase = phrase;
    }

    isPangram() {
        const text = this.phrase.toLowerCase();
        return [...'abcdefghijklmnopqrstuvwxyz'].every(char => text.includes(char));
    }


}

export default Pangram;