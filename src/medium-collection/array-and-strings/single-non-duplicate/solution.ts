export function singleNonDuplicate(nums: number[]): number {
  let result = nums[0];
  for (let i = 1; i < nums.length; i += 2) {
    if (result !== nums[i]) {
      break;
    }
    result = nums[i + 1];
  }
  return result;
}
