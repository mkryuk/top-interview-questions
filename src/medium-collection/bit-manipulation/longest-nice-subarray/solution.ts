export function longestNiceSubarray(nums: number[]): number {
  const n = nums.length;
  let result = 1;
  let left = 0;
  let mask = 0;
  for (let right = 0; right < n; right++) {
    while ((mask & nums[right]) !== 0) {
      mask &= ~nums[left];
      left++;
    }
    mask |= nums[right];
    result = Math.max(result, right - left + 1);
  }
  return result;
}
