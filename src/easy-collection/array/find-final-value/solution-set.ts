export function findFinalValue(nums: number[], original: number): number {
  const numSet = new Set(nums);
  while (numSet.has(original)) {
    original *= 2;
  }
  return original;
}
