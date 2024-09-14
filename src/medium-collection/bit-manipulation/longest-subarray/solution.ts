export function longestSubarray(nums: number[]): number {
  let max = Math.max(...nums);
  let currLen = 0;
  let result = 0;
  for (const num of nums) {
    if (num === max) {
      currLen++;
      result = Math.max(result, currLen);
    } else {
      currLen = 0;
    }
  }
  return result;
}
