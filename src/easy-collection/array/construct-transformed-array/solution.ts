export function constructTransformedArray(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const j = (((nums[i] + i) % n) + n) % n;
    result[i] = nums[j];
  }
  return result;
}
