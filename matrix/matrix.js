const arrayTranspose = (data) => {
    return data.map((r, row) => data.map((d, col) => data[col][row]));
}

export class Matrix {
    constructor(m){
        this.rows = m.split('\n').map(d => d.split(' ').map(Number));
        this.columns = arrayTranspose(this.rows);
    }

}