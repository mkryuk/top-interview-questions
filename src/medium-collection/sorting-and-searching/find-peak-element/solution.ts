export function findPeakElement(nums: number[]): number {
  const lb = -Infinity;
  const rb = -Infinity;
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums.length === 1 || (i === 0 && nums[i] > nums[i + 1])) {
      return 0;
    } else if (
      i === numsLength - 1 ||
      (nums[i - 1] < nums[i] && nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
  return -1;
}
