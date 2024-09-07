export function paintWalls(cost: number[], time: number[]): number {
  const n: number = cost.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[n][i] = Infinity;
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let remain = 1; remain <= n; remain++) {
      const paidPaint = cost[i] + dp[i + 1][Math.max(0, remain - 1 - time[i])];
      const freePaint = dp[i + 1][remain];
      dp[i][remain] = Math.min(paidPaint, freePaint);
    }
  }
  return dp[0][n];
}
