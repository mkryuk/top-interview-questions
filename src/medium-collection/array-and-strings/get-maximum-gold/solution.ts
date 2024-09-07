export function getMaximumGold(grid: number[][]): number {
  let result = 0;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[0].length; row++) {
      if (grid[col][row] > 0) {
        result = Math.max(result, dfs(grid, col, row));
      }
    }
  }
  return result;
}

function dfs(grid: number[][], col: number, row: number): number {
  const m = grid.length;
  const n = grid[0].length;
  if (col < 0 || col >= m || row < 0 || row >= n || grid[col][row] === 0) {
    return 0;
  }
  const gold = grid[col][row];
  grid[col][row] = 0;
  const result =
    gold + Math.max(dfs(grid, col + 1, row), dfs(grid, col - 1, row), dfs(grid, col, row + 1), dfs(grid, col, row - 1));
  grid[col][row] = gold;
  return result;
}
