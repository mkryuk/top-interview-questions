export function repeatedNTimes(nums: number[]): number {
  const seen = new Set<number>();
  for (const v of nums) {
    if (seen.has(v)) {
      return v;
    }
    seen.add(v);
  }
  return -1;
}
