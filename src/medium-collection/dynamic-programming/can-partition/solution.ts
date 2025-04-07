export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((p, n) => p + n, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}
