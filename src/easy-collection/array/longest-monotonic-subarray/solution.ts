export function longestMonotonicSubarray(nums: number[]): number {
  let result = 1;
  let increasingLength = 1;
  let decreasingLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increasingLength++;
      decreasingLength = 1;
    } else if (nums[i] < nums[i - 1]) {
      decreasingLength++;
      increasingLength = 1;
    } else {
      increasingLength = 1;
      decreasingLength = 1;
    }
    result = Math.max(result, decreasingLength, increasingLength);
  }
  return result;
}
