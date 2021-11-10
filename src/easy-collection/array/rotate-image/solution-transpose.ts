/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  // transpose and then reflect
  transpose(matrix);
  reflect(matrix);
}

// transpose the matrix diagonally
const transpose = (matrix: number[][]) => {
  const n = matrix[0].length;
  for (let row = 0; row < n; row++) {
    for (let col = row; col < n; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
};

// reflect the matrix left to right
const reflect = (matrix: number[][]) => {
  const n = matrix[0].length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < Math.floor(n / 2); col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[row][n - col - 1];
      matrix[row][n - col - 1] = temp;
    }
  }
};
