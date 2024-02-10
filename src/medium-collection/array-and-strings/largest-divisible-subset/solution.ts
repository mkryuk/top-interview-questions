export function largestDivisibleSubset(nums: number[]): number[] {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  const parent = new Array(n).fill(-1);
  let maxIndex = 0;
  let maxSize = 1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
        if (dp[i] > maxSize) {
          maxSize = dp[i];
          maxIndex = i;
        }
      }
    }
  }
  const result: number[] = [];
  let i = maxIndex;
  while (i >= 0) {
    result.push(nums[i]);
    i = parent[i];
  }
  // result without reverse also ok
  return result.reverse();
}
