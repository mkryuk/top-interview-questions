export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let start = 0;
  let end = m;
  let row = -1;
  // search the row we should start from
  while (start <= end && start < m) {
    let tempRow = start + Math.trunc((end - start) / 2);
    if (matrix[tempRow][0] > target) {
      end = tempRow - 1;
    } else {
      row = tempRow;
      start = tempRow + 1;
    }
  }

  // if there is no row that starts from the number
  // that less or equal to the target return false
  if (row === -1) {
    return false;
  }

  start = 0;
  end = n;
  // search the target in the row
  while (start <= end && start < n) {
    let col = start + Math.trunc((end - start) / 2);
    if (matrix[row][col] > target) {
      end = col - 1;
    } else if (matrix[row][col] < target) {
      start = col + 1;
    } else {
      return true;
    }
  }
  return false;
}
