export function minSteps(n: number): number {
  // If n is 1, we already have 'A' on the screen, so no further operations are needed.
  if (n <= 1) {
    return 0;
  }

  // Create an array to hold the minimum steps needed to reach each number of 'A's.
  // We're using n + 1 for simplicity so we can directly use the number of 'A's as the index.
  const dp: number[] = new Array(n + 1);

  // Base case: zero steps needed for 1 'A' as it's already there.
  dp[1] = 0;

  // Start filling the dp array from 2 onwards.
  for (let i = 2; i <= n; i++) {
    // Initially, set it to a large number. We're trying to minimize this, so we start high.
    dp[i] = i; // This assumes we just keep pasting 'A' one by one.
    for (let j = 1; j * j <= i; j++) {
      // Try dividing the current target by all numbers less than it.
      // When i is divisible by j, it means we can make i by copying the content i/j times.
      if (i % j === 0) {
        // We found a divisor, update the steps needed considering this factor.
        // i/j gives us the factor. We're basically saying "what if we reach 'j' 'A's,
        // copy it and paste it i/j - 1 times?"
        dp[i] = Math.min(dp[i], dp[j] + i / j);

        // Consider the other factor as well.
        dp[i] = Math.min(dp[i], dp[i / j] + j);
      }
    }
  }

  // The answer for n 'A's is now stored in dp[n].
  return dp[n];
}
