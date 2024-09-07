export function cherryPickup(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let dp = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Array(cols).fill(-1)));
  return dfs(grid, dp, 0, 0, cols - 1);
}

function dfs(grid: number[][], dp: number[][][], row: number, col1: number, col2: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  if (row < 0 || row >= rows || col1 < 0 || col1 >= cols || col2 < 0 || col2 >= cols) {
    return 0;
  }
  if (dp[row][col1][col2] !== -1) {
    return dp[row][col1][col2];
  }

  let result = grid[row][col1];
  if (col1 !== col2) {
    result += grid[row][col2];
  }
  let maxCherries = 0;
  for (let i = col1 - 1; i <= col1 + 1; i++) {
    for (let j = col2 - 1; j <= col2 + 1; j++) {
      maxCherries = Math.max(maxCherries, dfs(grid, dp, row + 1, i, j));
    }
  }
  result += maxCherries;
  dp[row][col1][col2] = result;
  return dp[row][col1][col2];
}
