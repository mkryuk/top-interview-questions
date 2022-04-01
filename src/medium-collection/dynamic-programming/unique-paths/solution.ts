export function uniquePaths(m: number, n: number): number {
  const grid: number[][] = new Array(m).fill(new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        grid[i][j] = 1;
      } else {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
}
