export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  let result = 0;
  for (let row = 0; row < grid2.length; row++) {
    for (let col = 0; col < grid2[row].length; col++) {
      if (grid2[row][col] === 1 && dfs(row, col, grid1, grid2)) {
        result++;
      }
    }
  }
  return result;
}

function dfs(row: number, col: number, grid1: number[][], grid2: number[][]): boolean {
  if (row < 0 || col < 0 || row > grid2.length - 1 || col > grid2[0].length - 1 || grid2[row][col] === 0) {
    return true;
  }

  if (grid1[row][col] === 0) {
    return false;
  }

  grid2[row][col] = 0;

  const right = dfs(row, col + 1, grid1, grid2);
  const down = dfs(row + 1, col, grid1, grid2);
  const left = dfs(row, col - 1, grid1, grid2);
  const top = dfs(row - 1, col, grid1, grid2);
  return right && down && left && top;
}
