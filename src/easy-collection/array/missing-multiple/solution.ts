export function missingMultiple(nums: number[], k: number): number {
  const values = new Set<number>(nums);

  let multiple = k;
  while (values.has(multiple)) {
    multiple += k;
  }

  return multiple;
}
