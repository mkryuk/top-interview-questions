export function maximumTripletValue(nums: number[]): number {
  let result = 0;
  const n = nums.length;
  for (let k = 2; k < n; k++) {
    for (let j = 1; j < k; j++) {
      for (let i = 0; i < j; i++) {
        result = Math.max(result, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }
  return result;
}
