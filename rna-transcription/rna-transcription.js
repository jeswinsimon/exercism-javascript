const dnaToRnaMaster = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

class Transcriptor {

    toRna(dnaStrand) {
        const dnaReducer = (strand, nucleotide) => {
            if (dnaToRnaMaster[nucleotide]) {
                return strand + dnaToRnaMaster[nucleotide];
            } 
            throw new Error("Invalid input DNA.");
        };
        return [...dnaStrand].reduce(dnaReducer, '');
    }

}

export default Transcriptor;
