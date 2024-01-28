export function kInversePairs(n: number, k: number): number {
  const MOD = 1e9 + 7;
  let dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(k + 1).fill(0),
  );

  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j <= k; j++) {
      sum = (sum + dp[i - 1][j]) % MOD;
      if (j >= i) sum = (sum - dp[i - 1][j - i] + MOD) % MOD;
      dp[i][j] = sum;
    }
  }

  return dp[n][k];
}
