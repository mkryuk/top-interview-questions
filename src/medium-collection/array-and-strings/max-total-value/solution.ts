export function maxTotalValue(nums: number[], k: number): number {
  let min: number = nums[0];
  let max: number = nums[0];

  for (const num of nums) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  return (max - min) * k;
}
