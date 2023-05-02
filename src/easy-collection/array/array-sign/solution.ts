export function arraySign(nums: number[]): number {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }
    if (nums[i] < 0) {
      result = -1 * result;
    }
  }
  return result;
}
