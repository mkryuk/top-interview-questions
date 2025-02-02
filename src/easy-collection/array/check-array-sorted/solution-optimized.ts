export function check(nums: number[]): boolean {
  const n = nums.length;
  if (n <= 1) {
    return true;
  }
  let decreasingCount = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      decreasingCount++;
    }
  }
  if (nums[0] < nums[n - 1]) {
    decreasingCount++;
  }
  return decreasingCount < 2;
}
