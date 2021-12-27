export function missingNumber(nums: number[]): number {
  const numSet = new Set<number>([]);
  for (let i = 0; i <= nums.length; i++) {
    numSet.add(i);
  }
  for (let i = 0; i < nums.length; i++) {
    numSet.delete(nums[i]);
  }
  return numSet.values().next().value;
}
