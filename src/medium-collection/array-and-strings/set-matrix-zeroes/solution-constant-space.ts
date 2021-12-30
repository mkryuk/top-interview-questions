/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  let firstColZero = false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
    }
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}
