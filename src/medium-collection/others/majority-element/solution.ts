export function majorityElement(nums: number[]): number {
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    count += majority === nums[i] ? 1 : -1;
  }
  return majority;
}
