const MOD = 1e9 + 7;
export function checkRecord(n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 3;
  }

  // dp[i][j][k] represents the number of valid sequences of length i, with j 'A's, ending in a sequence of k 'L's.
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 2 }, () => Array(3).fill(0)),
  );

  dp[0][0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k < 3; k++) {
        // Add 'P'
        dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;

        // Add 'A'
        if (j > 0) {
          dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j - 1][k]) % MOD;
        }

        // Add 'L'
        if (k > 0) {
          dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % MOD;
        }
      }
    }
  }

  let result = 0;
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k < 3; k++) {
      result = (result + dp[n][j][k]) % MOD;
    }
  }

  return result;
}
