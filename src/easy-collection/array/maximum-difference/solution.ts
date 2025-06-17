export function maximumDifference(nums: number[]): number {
  const n = nums.length;
  let min = nums[0];

  let result = -1;
  for (let i = 1; i < n; i++) {
    const diff = nums[i] - min;
    if (diff > 0) {
      // we have a valid increase; update result if it's bigger
      result = Math.max(result, diff);
    } else {
      // nums[i] <= min, make nums[i] the new candidate for the minimum
      min = nums[i];
    }
  }

  return result;
}
