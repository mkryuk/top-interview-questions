export function rob(nums: number[]): number {
  const memo: number[] = [];
  return robFromI(0, nums, memo);
}

function robFromI(index: number, nums: number[], memo: number[]): number {
  if (index >= nums.length) {
    return 0;
  }
  if (memo[index] !== undefined) {
    return memo[index];
  }
  const result = Math.max(robFromI(index + 1, nums, memo), robFromI(index + 2, nums, memo) + nums[index]);
  memo[index] = result;
  return result;
}
