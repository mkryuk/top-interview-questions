export function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length;
  const flipped = new Array(n).fill(0);
  let flipCount = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (i >= k) {
      flipCount ^= flipped[i - k];
    }
    if (nums[i] == flipCount) {
      if (i + k > n) {
        return -1;
      }
      flipped[i] = 1;
      flipCount ^= 1;
      result++;
    }
  }
  return result;
}
