export function minOperations(nums: number[], k: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum % k;
}
