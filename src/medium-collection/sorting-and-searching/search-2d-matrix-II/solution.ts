export function searchMatrix(matrix: number[][], target: number): boolean {
  let row = matrix.length - 1;
  let col = 0;
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] > target) {
      row--;
    } else if (matrix[row][col] < target) {
      col++;
    } else {
      return true;
    }
  }
  return false;
}
