export function numberOfPaths(grid: number[][], k: number): number {
  const MOD: number = 1e9 + 7;
  const rows: number = grid.length;
  const cols: number = grid[0].length;

  let prev: number[][] = create2DArray(cols, k);
  let curr: number[][] = create2DArray(cols, k);

  for (let i: number = 0; i < rows; i++) {
    // reset current row to zero before filling
    for (let j: number = 0; j < cols; j++) {
      for (let r: number = 0; r < k; r++) {
        curr[j][r] = 0;
      }
    }

    for (let j: number = 0; j < cols; j++) {
      const cellValue: number = grid[i][j];
      // base case for the starting cell (0, 0)
      if (i === 0 && j === 0) {
        const rem: number = cellValue % k;
        curr[0][rem] = 1;
        continue;
      }

      // for each possible remainder from top/left, move to this cell
      for (let r: number = 0; r < k; r++) {
        // ways coming from top cell
        let ways: number = prev[j][r];

        // ways coming from left cell in the same row
        if (j > 0) {
          ways += curr[j - 1][r];
          if (ways >= MOD) {
            ways -= MOD;
          }
        }

        // if no ways lead to this remainder, skip
        if (ways === 0) {
          continue;
        }

        // new remainder after adding current cell value
        const newRem: number = (r + cellValue) % k;

        curr[j][newRem] += ways;

        if (curr[j][newRem] >= MOD) {
          curr[j][newRem] -= MOD;
        }
      }
    }

    // move current row into prev for next iteration
    const temp: number[][] = prev;
    prev = curr;
    curr = temp;
  }

  // answer is number of paths to bottom-right with sum % k == 0
  return prev[cols - 1][0];
}

function create2DArray(cols: number, k: number): number[][] {
  const arr: number[][] = new Array(cols);

  for (let j: number = 0; j < cols; j++) {
    arr[j] = new Array(k);
    for (let r: number = 0; r < k; r++) {
      arr[j][r] = 0;
    }
  }

  return arr;
}
