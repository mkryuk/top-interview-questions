export function numberOfWays(n: number, x: number): number {
  const MOD = 1_000_000_007;

  // precompute all i^x <= n
  const powers: number[] = [];
  for (let i = 1; ; i++) {
    const p = Math.pow(i, x);
    if (p > n) break;
    powers.push(p);
  }

  // dp[s] = number of ways to reach sum s using unique powers
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;

  for (const p of powers) {
    for (let s = n; s >= p; s--) {
      dp[s] = (dp[s] + dp[s - p]) % MOD;
    }
  }

  return dp[n];
}
