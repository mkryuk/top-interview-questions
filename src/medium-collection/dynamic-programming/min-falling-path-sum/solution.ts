export function minFallingPathSum(matrix: number[][]): number {
  let n = matrix.length;
  for (let row = 1; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let minValue = matrix[row - 1][col];
      if (col > 0) {
        minValue = Math.min(minValue, matrix[row - 1][col - 1]);
      }
      if (col < n - 1) {
        minValue = Math.min(minValue, matrix[row - 1][col + 1]);
      }
      matrix[row][col] = matrix[row][col] + minValue;
    }
  }
  return Math.min(...matrix[n - 1]);
}
