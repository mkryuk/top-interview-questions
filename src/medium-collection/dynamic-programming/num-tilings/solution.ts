export function numTilings(n: number): number {
  let mod = 10 ** 9 + 7;
  const arrLen = n < 4 ? 4 : n;
  const dp = new Array(arrLen).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  if (n <= 3) return dp[n];
  for (let i = 4; i <= n; ++i) {
    dp[i] = 2 * dp[i - 1] + dp[i - 3];
    dp[i] %= mod;
  }
  return dp[n];
}
