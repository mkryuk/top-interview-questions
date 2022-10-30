export class NumMatrix {
  matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  update(row: number, col: number, val: number): void {
    this.matrix[row][col] = val;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }
    return sum;
  }
}
