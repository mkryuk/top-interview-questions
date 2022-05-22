export function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;
  enum Direction {
    Right,
    Down,
    Left,
    Up,
  }
  let direction: Direction = Direction.Right;
  let i = 0;
  let j = 0;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;
  let result = [matrix[i][j]];
  for (let index = 0; index < m * n - 1; ) {
    if (direction === Direction.Right) {
      if (j < right) {
        j++;
        result.push(matrix[i][j]);
        index++;
        continue;
      } else {
        top++;
        direction = Direction.Down;
      }
    }
    if (direction === Direction.Down) {
      if (i < bottom) {
        i++;
        result.push(matrix[i][j]);
        index++;
        continue;
      } else {
        right--;
        direction = Direction.Left;
      }
    }
    if (direction === Direction.Left) {
      if (j > left) {
        j--;
        result.push(matrix[i][j]);
        index++;
        continue;
      } else {
        bottom--;
        direction = Direction.Up;
      }
    }
    if (direction === Direction.Up) {
      if (i > top) {
        i--;
        result.push(matrix[i][j]);
        index++;
        continue;
      } else {
        left++;
        direction = Direction.Right;
      }
    }
  }
  return result;
}
