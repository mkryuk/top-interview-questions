export function maxMatrixSum(matrix: number[][]): number {
  let result = 0;
  let minVal = Number.MAX_SAFE_INTEGER;
  let negativeCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < 0) {
        negativeCount++;
      }
      minVal = Math.min(minVal, Math.abs(matrix[i][j]));
      result += Math.abs(matrix[i][j]);
    }
  }
  if (negativeCount % 2 !== 0) {
    result -= 2 * minVal;
  }
  return result;
}
