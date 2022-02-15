export function findPeakElement(nums: number[]): number {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return numsLength - 1;
}
