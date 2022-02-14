export function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}
