export function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // The largest product can either be from the three largest numbers
  const prod1: number = nums[n - 1] * nums[n - 2] * nums[n - 3];
  // Or from two smallest (possibly negative) and the largest number
  const prod2: number = nums[0] * nums[1] * nums[n - 1];
  const result = Math.max(prod1, prod2);
  return result;
}
