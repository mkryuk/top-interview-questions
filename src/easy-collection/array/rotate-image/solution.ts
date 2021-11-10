/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const layersCount = Math.ceil(n / 2);

  for (let i = 0; i < layersCount; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      // store element from the top of the matrix to the temp
      const temp = matrix[i][j];
      // put element from the left to the top
      matrix[i][j] = matrix[n - 1 - j][i];
      // put element from the bottom to the left
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      // put element from the right to the bottom
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      // put element from the temp (top) to the right
      matrix[j][n - 1 - i] = temp;
    }
  }
}
