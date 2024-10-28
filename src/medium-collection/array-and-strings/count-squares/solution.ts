export function countSquares(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;

  let result = 0;

  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // only proceed if the cell contains a '1'
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          // cells in the first row or first column can only form squares of size 1
          dp[i][j] = 1;
        } else {
          // determine the size of the largest square ending at (i, j)
          dp[i][j] =
            Math.min(
              dp[i - 1][j], // above
              dp[i][j - 1], // left
              dp[i - 1][j - 1], // top-left diagonal
            ) + 1;
        }
        // add the number of squares ending at (i, j) to the result
        result += dp[i][j];
      }
    }
  }

  return result;
}
