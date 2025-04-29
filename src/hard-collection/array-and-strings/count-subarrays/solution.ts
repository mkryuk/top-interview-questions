export function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  let result = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < n) {
    let len = right - left + 1;
    sum += nums[right];
    let score = sum * len;
    while (score >= k) {
      sum -= nums[left];
      left++;
      len = right - left + 1;
      score = sum * len;
    }
    result += len;
    right++;
  }
  return result;
}
