export function missingNumber(nums: number[]): number {
  let gaussSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = nums.reduce((p, c) => p + c);
  return gaussSum - actualSum;
}
