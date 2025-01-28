export function findMaxFish(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
  let result = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] > 0 && !visited[row][col]) {
        result = Math.max(result, dfs(row, col, grid, visited));
      }
    }
  }
  return result;
}

function dfs(row: number, col: number, grid: number[][], visited: boolean[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let sum = grid[row][col];
  visited[row][col] = true;
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;
    if (
      newRow >= 0 &&
      newCol >= 0 &&
      newRow < grid.length &&
      newCol < grid[0].length &&
      !visited[newRow][newCol] &&
      grid[newRow][newCol] > 0
    ) {
      sum += dfs(newRow, newCol, grid, visited);
    }
  }
  return sum;
}
