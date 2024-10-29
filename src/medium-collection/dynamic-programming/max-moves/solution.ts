export function maxMoves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const cache = Array.from({ length: m }, () => new Array(n).fill(-1));
  let result = 0;
  for (let i = 0; i < m; i++) {
    result = Math.max(result, dfs(i, 0, grid, cache));
  }
  return result;
}

function dfs(row: number, col: number, grid: number[][], cache: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  if (cache[row][col] !== -1) {
    return cache[row][col];
  }
  let directions = [-1, 0, 1];
  let maxMoves = 0;

  for (const dir of directions) {
    const newRow = row + dir;
    const newCol = col + 1;
    if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[row][col] < grid[newRow][newCol]) {
      maxMoves = Math.max(maxMoves, 1 + dfs(newRow, newCol, grid, cache));
    }
  }

  cache[row][col] = maxMoves;
  return maxMoves;
}
