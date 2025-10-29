export function countValidSelections(nums: number[]): number {
  let n = nums.length;
  let result = 0;
  let sum = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  let right = sum;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (left - right >= 0 && left - right <= 1) {
        result++;
      }
      if (right - left >= 0 && right - left <= 1) {
        result++;
      }
    } else {
      left += nums[i];
      right -= nums[i];
    }
  }
  return result;
}
