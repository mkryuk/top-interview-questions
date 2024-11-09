export function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const n = nums.length;
  const maxNum = (1 << maximumBit) - 1;
  const result: number[] = new Array(n);
  let xorSum = 0;
  for (let i = 0; i < n; i++) {
    xorSum ^= nums[i];
  }

  for (let i = 0; i < n; i++) {
    result[i] = xorSum ^ maxNum;
    xorSum = xorSum ^ nums[n - 1 - i];
  }
  return result;
}
