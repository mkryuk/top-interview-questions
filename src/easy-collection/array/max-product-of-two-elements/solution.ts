export function maxProduct(nums: number[]): number {
  for (let i = 2; i < nums.length; i++) {
    if (nums[0] < nums[1] && nums[0] < nums[i]) {
      nums[0] = nums[i];
    } else if (nums[1] < nums[i]) {
      nums[1] = nums[i];
    }
  }
  return (nums[0] - 1) * (nums[1] - 1);
}
