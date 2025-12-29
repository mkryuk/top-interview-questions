export function countNegatives(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;

  let row: number = m - 1; // start bottom-left
  let col: number = 0;
  let result: number = 0;

  while (row >= 0 && col < n) {
    if (grid[row][col] < 0) {
      // everything to the right in this row is also negative
      result += n - col;
      row -= 1; // move up
    } else {
      col += 1; // move right
    }
  }

  return result;
}
