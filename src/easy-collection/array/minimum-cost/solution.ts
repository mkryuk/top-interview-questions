export function minimumCost(nums: number[]): number {
  let [firstMin, secondMin] = nums.slice(1).sort((a, b) => a - b);
  return nums[0] + firstMin + secondMin;
}
