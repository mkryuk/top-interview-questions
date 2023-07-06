export function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  let window = 0;
  for (let left = 0, right = 0; right < nums.length; right++) {
    window += nums[right];
    while (left <= right && window >= target) {
      result = Math.min(result, right - left + 1);
      window -= nums[left++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
