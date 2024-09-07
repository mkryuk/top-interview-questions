export function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let count = 0;

  // Precompute the prefix sums for each row
  for (let i = 0; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }

  // Iterate over all pairs of columns
  for (let colStart = 0; colStart < cols; colStart++) {
    for (let colEnd = colStart; colEnd < cols; colEnd++) {
      let sumMap = new Map<number, number>();
      sumMap.set(0, 1); // Base case
      let sum = 0;

      for (let row = 0; row < rows; row++) {
        sum += matrix[row][colEnd] - (colStart > 0 ? matrix[row][colStart - 1] : 0);
        count += sumMap.get(sum - target) || 0;
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
      }
    }
  }

  return count;
}
