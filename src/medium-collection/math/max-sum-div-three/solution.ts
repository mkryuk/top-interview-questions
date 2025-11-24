export function maxSumDivThree(nums: number[]): number {
  // dp[r] = max sum with remainder r when divided by 3
  let dp: number[] = [0, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];

  for (const num of nums) {
    // create a copy to avoid in-place overwrites during this iteration
    const nextDp: number[] = [...dp];

    for (let r = 0; r < 3; r++) {
      if (dp[r] === Number.NEGATIVE_INFINITY) {
        // skip impossible states
        continue;
      }

      const newRemainder: number = (r + num) % 3;
      const newSum: number = dp[r] + num;

      if (newSum > nextDp[newRemainder]) {
        // update max sum for this remainder
        nextDp[newRemainder] = newSum;
      }
    }

    dp = nextDp;
  }

  // dp[0] is the maximum sum divisible by 3
  return dp[0];
}
