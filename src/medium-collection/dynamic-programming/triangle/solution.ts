export function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 0) {
    return 0;
  }

  // dp will store the minimal path sums for the "current" bottom slice
  // start from the last row (base case: minimal sums from bottom to bottom are the values themselves)
  const n = triangle.length;
  const dp = triangle[n - 1].slice();

  // iterate rows from second-last up to the top
  for (let r = n - 2; r >= 0; r--) {
    // for each position, choose the cheaper of the two children below
    for (let c = 0; c <= r; c++) {
      const downLeft = dp[c];
      const downRight = dp[c + 1];
      dp[c] = triangle[r][c] + Math.min(downLeft, downRight);
    }
  }

  // dp[0] now holds the minimal path sum from the apex to the bottom
  return dp[0];
}
