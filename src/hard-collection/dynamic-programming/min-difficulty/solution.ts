export function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;

  // If there are fewer jobs than days, it's impossible to schedule.
  if (n < d) return -1;

  // Initialize the dp array. dp[i][j] will represent the minimum difficulty to schedule the first i jobs in j days.
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(d + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, d); j++) {
      let maxDifficulty = 0;

      // Iterate through the jobs in reverse to calculate the minimum difficulty.
      for (let k = i - 1; k >= j - 1; k--) {
        maxDifficulty = Math.max(maxDifficulty, jobDifficulty[k]);
        dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + maxDifficulty);
      }
    }
  }

  // The answer is the minimum difficulty to schedule all jobs in d days.
  return dp[n][d];
}
