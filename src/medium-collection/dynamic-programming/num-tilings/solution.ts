export function numTilings(n: number): number {
  // Declare a constant for the modulus value.
  let mod = 1e9 + 7;

  // Initialize an array to store the number of ways to tile each board.
  // The first three values are given.
  const dp = new Array(1001).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;

  // If the board is 2 x 1 or 2 x 2, return the corresponding value.
  if (n <= 3) return dp[n];

  // For each board size from 2 x 4 onwards, calculate the number of ways to tile it.
  for (let i = 4; i <= n; ++i) {
    // The number of ways to tile a 2 x i board is equal to the number of ways to tile a 2 x (i-1) board
    // plus the number of ways to tile a 2 x (i-3) board, multiplied by 2 to account for the possibility
    // of using a horizontal or vertical tromino.
    dp[i] = 2 * dp[i - 1] + dp[i - 3];

    // Take the modulus of the result to prevent it from getting too large.
    dp[i] %= mod;
  }

  // Return the number of ways to tile the given board.
  return dp[n];
}
