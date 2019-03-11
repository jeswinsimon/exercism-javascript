const arrayTranspose = (data) => {
    let dT = data.map((r, row) => data.map((d, col) => data[col][row]));
    return dT;
}

export default class Matrix {
    constructor(m){
        this.rows = m.split('\n').map(d => d.split(' ').map(Number));
        this.columns = arrayTranspose(this.rows);
    }

}