export class NumMatrix {
  rows: number;
  cols: number;
  bit: number[][]; // The BIT matrix

  constructor(matrix: number[][]) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.bit = new Array(this.rows + 1);
    if (this.rows === 0) {
      return;
    }
    // Using 1 based indexing, hence resizing the bit array to (rows + 1, cols + 1)
    for (let i = 1; i <= this.rows; ++i) {
      this.bit[i] = new Array(this.cols + 1).fill(0);
    }
    this.buildBIT(matrix);
  }

  buildBIT(matrix: number[][]): void {
    for (let i = 1; i <= this.rows; ++i) {
      for (let j = 1; j <= this.cols; ++j) {
        // call update function on each of the entries present in the matrix
        const val = matrix[i - 1][j - 1];
        this.updateBIT(i, j, val);
      }
    }
  }

  updateBIT(r: number, c: number, val: number): void {
    // keep adding lsb(i) to i, lsb(j) to j and add val to bit[i][j]
    // Using two nested for loops, one for the rows and one for the columns
    for (let i = r; i <= this.rows; i += this.lsb(i)) {
      for (let j = c; j <= this.cols; j += this.lsb(j)) {
        this.bit[i][j] += val;
      }
    }
  }

  lsb(n: number): number {
    // the line below allows us to directly capture the right most non-zero bit of a number
    return n & -n;
  }

  queryBIT(r: number, c: number): number {
    let sum = 0;
    // keep subtracting lsb(i) to i, lsb(j) to j and obtain the final sum as the sum of non-overlapping sub-rectangles
    // Using two nested for loops, one for the rows and one for the columns
    for (let i = r; i > 0; i -= this.lsb(i)) {
      for (let j = c; j > 0; j -= this.lsb(j)) {
        sum += this.bit[i][j];
      }
    }
    return sum;
  }

  update(row: number, col: number, val: number): void {
    let old_val = this.sumRegion(row, col, row, col);
    // handling 1-based indexing
    row++;
    col++;
    let diff = val - old_val;
    this.updateBIT(row, col, diff);
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    // handling 1-based indexing
    row1++;
    col1++;
    row2++;
    col2++;
    const a = this.queryBIT(row2, col2);
    const b = this.queryBIT(row1 - 1, col1 - 1);
    const c = this.queryBIT(row2, col1 - 1);
    const d = this.queryBIT(row1 - 1, col2);
    return a + b - (c + d);
  }
}
