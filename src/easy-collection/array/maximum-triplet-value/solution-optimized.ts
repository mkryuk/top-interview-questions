export function maximumTripletValue(nums: number[]): number {
  const n = nums.length;
  let result = 0;
  let iMax = 0;
  let dMax = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dMax * nums[i]);
    iMax = Math.max(iMax, nums[i]);
    dMax = Math.max(dMax, iMax - nums[i]);
  }
  return result;
}
