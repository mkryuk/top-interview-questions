export function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    const newNums = [];
    for (let i = 0; i < nums.length - 1; i++) {
      newNums.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = newNums;
  }
  return nums[0];
}
