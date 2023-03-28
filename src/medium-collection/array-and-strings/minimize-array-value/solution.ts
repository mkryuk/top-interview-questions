export function minimizeArrayValue(nums: number[]): number {
  let prefixSum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    result = Math.max(result, Math.ceil(prefixSum / (i + 1)));
  }
  return result;
}
