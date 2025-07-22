export function maximumUniqueSubarray(nums: number[]): number {
  const seen = new Set<number>();
  let result = 0;
  let windowSum = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    while (seen.has(nums[i])) {
      seen.delete(nums[left]);
      windowSum -= nums[left];
      left++;
    }
    seen.add(nums[i]);
    windowSum += nums[i];
    result = Math.max(result, windowSum);
  }
  return result;
}
