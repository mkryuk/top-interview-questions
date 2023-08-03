export function isGood(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  let n = nums.length - 1;
  if (nums[n] !== n || nums[n - 1] !== n) {
    return false;
  }
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== i + 1) {
      return false;
    }
  }
  return true;
}
