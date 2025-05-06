export function buildArray(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const idx = nums[i];
    result[i] = nums[idx];
  }
  return result;
}
