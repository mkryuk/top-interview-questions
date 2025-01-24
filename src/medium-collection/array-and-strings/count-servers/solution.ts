export function countServers(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        rowCount[row]++;
        colCount[col]++;
      }
    }
  }

  let result = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1 && (rowCount[row] > 1 || colCount[col] > 1)) {
        result++;
      }
    }
  }
  return result;
}
