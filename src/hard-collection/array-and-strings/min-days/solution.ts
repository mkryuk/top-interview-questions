export function minDays(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // check if already disconnected
  if (isDisconnected(grid)) {
    return 0;
  }

  // check if we can disconnect by changing just one land cell to water
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        if (isDisconnected(grid)) {
          return 1;
        }
        grid[i][j] = 1;
      }
    }
  }

  // otherwise, it must take at least two moves
  return 2;
}

// perform DFS and mark visited cells
function dfs(grid: number[][], visited: boolean[][], i: number, j: number) {
  const m = grid.length;
  const n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j]) {
    return;
  }
  visited[i][j] = true;
  dfs(grid, visited, i + 1, j);
  dfs(grid, visited, i - 1, j);
  dfs(grid, visited, i, j + 1);
  dfs(grid, visited, i, j - 1);
}

// check if the grid is disconnected
function isDisconnected(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false),
  );
  let islandCount = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        if (islandCount > 0) {
          return true; // more than one island found
        }
        dfs(grid, visited, i, j);
        islandCount++;
      }
    }
  }

  // return true if not exactly one island
  return islandCount !== 1;
}
