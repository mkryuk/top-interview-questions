export function maximumJumps(nums: number[], target: number): number {
  const n = nums.length;
  const dp = new Array<number>(n).fill(-1);
  dp[0] = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (dp[i] === -1) {
        continue;
      }
      const diff = nums[j] - nums[i];
      if (diff >= -target && diff <= target) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  return dp[n - 1];
}
