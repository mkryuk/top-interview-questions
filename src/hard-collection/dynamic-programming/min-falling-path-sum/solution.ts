export function minFallingPathSum(grid: number[][]): number {
  let n = grid.length;
  if (n === 1) {
    return grid[0][0];
  }

  // Initialize dp array with values from the first row of grid
  let dp: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(0));
  dp[0] = [...grid[0]];

  // Fill the dp array
  for (let i = 1; i < n; i++) {
    let min1 = Infinity,
      min2 = Infinity,
      idx1 = -1;

    // Find the minimum and second minimum in the previous row
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] < min1) {
        min2 = min1;
        min1 = dp[i - 1][j];
        idx1 = j;
      } else if (dp[i - 1][j] < min2) {
        min2 = dp[i - 1][j];
      }
    }

    // Calculate dp for the current row
    for (let j = 0; j < n; j++) {
      if (j === idx1) {
        // Use second min if same column as min1
        dp[i][j] = grid[i][j] + min2;
      } else {
        dp[i][j] = grid[i][j] + min1;
      }
    }
  }

  // Get the minimum value from the last row
  return Math.min(...dp[n - 1]);
}
