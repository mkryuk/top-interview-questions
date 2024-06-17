export function minPatches(nums: number[], n: number): number {
  let result = 0;
  let missing = 1;
  let index = 0;
  while (missing <= n) {
    if (index < nums.length && nums[index] <= missing) {
      missing += nums[index];
      index++;
    } else {
      missing += missing;
      result++;
    }
  }
  return result;
}
