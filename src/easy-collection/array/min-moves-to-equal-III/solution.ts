export function minMoves(nums: number[]): number {
  let max = nums[0];
  let sum = 0;

  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }

  return max * nums.length - sum;
}
