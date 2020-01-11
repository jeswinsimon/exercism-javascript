export class Triangle {
  constructor(height) {
    this.height = height;
    this.rows = new Array(height).fill([]);
    this.rows = this.rows.map((_, i) => new Array(i + 1).fill(1));
    for (let i = 2; i < height; i += 1) {
      for (let j = 1; j < i; j += 1) {
        this.rows[i][j] = this.rows[i - 1][j - 1] + this.rows[i - 1][j];
      }
    }
  }

  get lastRow() {
    return this.rows[this.height - 1];
  }
}
