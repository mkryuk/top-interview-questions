export function minDifference(nums: number[]): number {
  if (nums.length < 5) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  const n = nums.length;
  for (let i = 0; i < 4; i++) {
    minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
  }
  return minDiff;
}
