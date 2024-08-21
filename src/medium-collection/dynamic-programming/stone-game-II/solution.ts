export function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n + 1).fill(0));
  const suffixSum: number[] = Array(n).fill(0);

  suffixSum[n - 1] = piles[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = piles[i] + suffixSum[i + 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let m = 1; m <= n; m++) {
      for (let x = 1; x <= 2 * m && i + x <= n; x++) {
        dp[i][m] = Math.max(
          dp[i][m],
          suffixSum[i] - (i + x < n ? dp[i + x][Math.max(m, x)] : 0),
        );
      }
    }
  }

  return dp[0][1];
}
