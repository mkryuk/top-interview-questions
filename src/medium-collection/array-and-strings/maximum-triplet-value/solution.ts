export function maximumTripletValue(nums: number[]): number {
  const n = nums.length;
  let result = 0;
  let iMax = 0;
  let diffMax = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, diffMax * nums[i]);
    iMax = Math.max(iMax, nums[i]);
    diffMax = Math.max(diffMax, iMax - nums[i]);
  }
  return result;
}
