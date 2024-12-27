export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (Math.abs(target) > sum) {
    return 0;
  }
  if ((sum + target) % 2 !== 0) {
    return 0;
  }
  let dpLength = Math.floor((sum + target) / 2);
  const dp = new Array(dpLength + 1).fill(0);
  // there's exactly 1 way to reach 0 sum (choose nothing)
  dp[0] = 1;

  for (const num of nums) {
    for (let i = dpLength; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }
  return dp[dpLength];
}
