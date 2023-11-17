export function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let max = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    max = Math.max(max, nums[left++] + nums[right--]);
  }
  return max;
}
