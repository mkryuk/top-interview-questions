export function maxAdjacentDistance(nums: number[]): number {
  const n = nums.length;
  // we add first - last distance to check
  let result = Math.abs(nums[0] - nums[n - 1]);
  for (let i = 1; i < n; i++) {
    result = Math.max(result, Math.abs(nums[i] - nums[i - 1]));
  }
  return result;
}
