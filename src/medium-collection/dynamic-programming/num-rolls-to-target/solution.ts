export function numRollsToTarget(n: number, k: number, target: number): number {
  const MOD: number = 1e9 + 7;
  // Initialize a 2D array to store the number of ways to get to sum j with i dice.
  let dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));

  // Base case: There's 1 way to achieve a sum of 0 with 0 dice.
  dp[0][0] = 1;

  // Iterate over each die.
  for (let i = 1; i <= n; i++) {
    // Iterate over each possible sum.
    for (let j = 1; j <= target; j++) {
      // Calculate ways to achieve this sum with the current die.
      for (let x = 1; x <= k; x++) {
        if (j >= x) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % MOD;
        }
      }
    }
  }

  // Return the number of ways to achieve the target sum with all dice.
  return dp[n][target];
}
