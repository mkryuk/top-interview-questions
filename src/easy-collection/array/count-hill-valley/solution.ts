export function countHillValley(nums: number[]): number {
  let minimums = 0;
  let wasDown = false;
  let maximums = 0;
  let wasUp = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      wasDown = true;
    }
    if (wasDown && nums[i] < nums[i + 1]) {
      minimums++;
      wasDown = false;
    }
    if (nums[i] < nums[i + 1]) {
      wasUp = true;
    }
    if (wasUp && nums[i] > nums[i + 1]) {
      maximums++;
      wasUp = false;
    }
  }
  return minimums + maximums;
}
