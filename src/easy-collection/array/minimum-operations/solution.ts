export function minimumOperations(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = n - 1; i >= 0; i--) {
    if (map.has(nums[i])) {
      return Math.ceil((i + 1) / 3);
    }
    map.set(nums[i], i);
  }
  return 0;
}
