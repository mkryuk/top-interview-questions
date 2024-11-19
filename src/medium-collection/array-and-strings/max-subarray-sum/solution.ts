export function maximumSubarraySum(nums: number[], k: number): number {
  let count = new Map<number, number>();
  const n = nums.length;
  let result = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);
    sum += nums[i];
    // decrease the window sum
    if (i >= k) {
      count.set(nums[i - k], count.get(nums[i - k])! - 1);
      sum -= nums[i - k];
    }
    // remove num out of the window
    if (count.get(nums[i - k]) === 0) {
      count.delete(nums[i - k]);
    }
    // check if all elements are distinct
    if (count.size === k) {
      result = Math.max(result, sum);
    }
  }
  return result;
}
