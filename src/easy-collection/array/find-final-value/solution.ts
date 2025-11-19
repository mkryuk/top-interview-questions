export function findFinalValue(nums: number[], original: number): number {
  nums.sort((a, b) => a - b);
  for (const num of nums) {
    if (num === original) {
      original *= 2;
    }
  }
  return original;
}
