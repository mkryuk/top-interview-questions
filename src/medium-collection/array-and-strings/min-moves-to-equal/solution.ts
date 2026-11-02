export function minMoves(nums: number[]): number {
  let min = nums[0];
  let sum = 0;

  for (const num of nums) {
    sum += num;

    if (num < min) {
      min = num;
    }
  }

  return sum - min * nums.length;
}
