export function majorityElement(nums: number[]): number {
  return nums.length === 1 ? nums[0] : nums[Math.floor(nums.sort((a, b) => a - b).length / 2)];
}
