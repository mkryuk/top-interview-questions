export function maxCoins(nums: number[]): number {
  let n = nums.length + 2;
  let newNums = [1, ...nums, 1];

  let dp: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
  }
  // do not include the first one and the last one
  // since they are both fake balloons added by ourselves and we can not burst
  // them
  for (let left = n - 2; left >= 1; left--) {
    for (let right = left; right <= n - 2; right++) {
      // find the last burst one in newNums[left]...newNums[right]
      for (let i = left; i <= right; i++) {
        // newNums[i] is the last burst one
        const gain = newNums[left - 1] * newNums[i] * newNums[right + 1];
        // recursively call left side and right side
        const remaining = dp[left][i - 1] + dp[i + 1][right];
        // update
        dp[left][right] = Math.max(remaining + gain, dp[left][right]);
      }
    }
  }
  // burst newNums[1]...newNums[n-2], excluding the first one and the last one
  return dp[1][n - 2];
}
