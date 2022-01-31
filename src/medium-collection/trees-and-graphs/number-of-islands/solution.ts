export function numIslands(grid: string[][]): number {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (grid[i][k] === "1") {
        result++;
        dfs(grid, i, k);
      }
    }
  }
  return result;
}

// Treat the 2d grid map as an undirected graph
// and there is an edge between two horizontally
// or vertically adjacent nodes of value '1'.
function dfs(grid: string[][], r: number, c: number) {
  const h = grid.length;
  const w = grid[0].length;
  if (r < 0 || r >= h || c < 0 || c >= w || grid[r][c] === "0") {
    return;
  }
  grid[r][c] = "0";
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
}
