export function missingNumber(nums: number[]): number {
  const numSet = new Set<number>([]);
  nums.forEach((n) => numSet.add(n));
  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
  return -1;
}
