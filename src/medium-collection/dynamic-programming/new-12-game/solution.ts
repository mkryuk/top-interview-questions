export function new21Game(n: number, k: number, maxPts: number): number {
  // if k is 0, alice never draws, stays at 0 which is always ≤ n
  if (k === 0) {
    return 1;
  }

  // if n is large enough to always cover the whole stopping range, prob is 1
  // stopping scores lie in [k, k + maxPts - 1]
  if (n >= k - 1 + maxPts) {
    return 1;
  }

  // dp[i] = probability to end at exactly i points
  const dp: number[] = new Array(n + 1);
  for (let i = 0; i <= n; i += 1) {
    dp[i] = 0;
  }

  // base case: start at 0 with probability 1
  dp[0] = 1;

  // windowSum keeps sum of the last maxPts dp values for states < k
  // specifically, windowSum = dp[i-1] + dp[i-2] + ... + dp[i-maxPts] but only those with index < k
  let windowSum = 1;

  // result accumulates probabilities for terminal states in [k, n]
  let result = 0;

  for (let i = 1; i <= n; i += 1) {
    dp[i] = windowSum / maxPts;

    if (i < k) {
      windowSum += dp[i];
    } else {
      result += dp[i];
    }

    if (i - maxPts >= 0) {
      if (i - maxPts < k) {
        windowSum -= dp[i - maxPts];
      }
    }
  }

  return result;
}
