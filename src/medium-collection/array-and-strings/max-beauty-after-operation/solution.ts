export function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) {
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}
