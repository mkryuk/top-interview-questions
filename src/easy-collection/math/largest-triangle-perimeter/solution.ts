export function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 2; i < nums.length; i++) {
    const a = nums[i - 2];
    const b = nums[i - 1];
    const c = nums[i];
    if (a < b + c) {
      return a + b + c;
    }
  }
  return 0;
}
