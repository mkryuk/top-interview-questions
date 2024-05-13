export function matrixScore(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // Toggle rows if the most significant bit is not 1
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] = 1 - grid[i][j];
      }
    }
  }

  // Toggle columns to maximize the number of 1's in each column
  for (let j = 0; j < n; j++) {
    let countZeroes = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 0) {
        countZeroes++;
      }
    }
    if (countZeroes > m / 2) {
      for (let i = 0; i < m; i++) {
        grid[i][j] = 1 - grid[i][j];
      }
    }
  }

  // Calculate the final result
  let result = 0;
  for (let i = 0; i < m; i++) {
    let rowValue = 0;
    for (let j = 0; j < n; j++) {
      rowValue = (rowValue << 1) | grid[i][j];
    }
    result += rowValue;
  }

  return result;
}
