export function onesMinusZeros(grid: number[][]): number[][] {
  let m = grid.length;
  let n = grid[0].length;
  let onesRow = new Array(m).fill(0);
  let onesCol = new Array(n).fill(0);
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        onesRow[row]++;
        onesCol[col]++;
      }
    }
  }

  let result: number[][] = [];
  for (let row = 0; row < m; row++) {
    let rowItems = new Array(n);
    for (let col = 0; col < n; col++) {
      rowItems[col] =
        onesRow[row] + onesCol[col] - (m - onesRow[row]) - (n - onesCol[col]);
    }
    result.push(rowItems);
  }
  return result;
}
