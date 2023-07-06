export function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  let window = 0;
  let lIdx = 0;
  for (let rIdx = 0; rIdx < nums.length; rIdx++) {
    window += nums[rIdx];
    while (lIdx <= rIdx && window >= target) {
      result = Math.min(result, rIdx - lIdx + 1);
      window -= nums[lIdx++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
