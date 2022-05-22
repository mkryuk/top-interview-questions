export function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  const result: number[] = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = columns - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    // we can go left if we have more than one row left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    // we can go up if we have more than one column left
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
