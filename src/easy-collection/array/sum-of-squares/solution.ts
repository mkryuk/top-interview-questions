export function sumOfSquares(nums: number[]): number {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (n % (i + 1) === 0) {
      result += nums[i] * nums[i];
    }
  }
  return result;
}
