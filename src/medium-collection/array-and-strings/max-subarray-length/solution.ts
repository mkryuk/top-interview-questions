export function maxSubarrayLength(nums: number[], k: number): number {
  let result = 0;
  let left = 0;
  let frequencyMap = new Map<number, number>();
  for (let right = 0; right < nums.length; right++) {
    frequencyMap.set(nums[right], (frequencyMap.get(nums[right]) ?? 0) + 1);
    while (frequencyMap.get(nums[right])! > k) {
      frequencyMap.set(nums[left], frequencyMap.get(nums[left])! - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}
