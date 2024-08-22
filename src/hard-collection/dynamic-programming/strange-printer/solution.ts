export function strangePrinter(s: string): number {
  const n = s.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    // single character substring requires 1 turn
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        // if characters are the same, they can be printed in the same turn
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = Infinity;
        for (let k = i; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
        }
      }
    }
  }
  return dp[0][n - 1];
}
