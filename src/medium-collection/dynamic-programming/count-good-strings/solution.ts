export function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const MOD = 1e9 + 7;
  const dp: number[] = new Array(high + 1).fill(0);

  // base case: one way to have an empty string
  dp[0] = 1;

  for (let length = 1; length <= high; length++) {
    // if we can append 'zero' zeros to get here
    if (length - zero >= 0) {
      dp[length] = (dp[length] + dp[length - zero]) % MOD;
    }
    // if we can append 'one' ones to get here
    if (length - one >= 0) {
      dp[length] = (dp[length] + dp[length - one]) % MOD;
    }
  }

  // sum up dp[i] for i in [low..high]
  let result = 0;
  for (let i = low; i <= high; i++) {
    result = (result + dp[i]) % MOD;
  }

  return result;
}
