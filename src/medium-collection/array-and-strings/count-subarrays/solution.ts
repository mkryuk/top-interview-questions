export function countSubarrays(nums: number[], k: number): number {
  let maxElement = Math.max(...nums);
  let result = 0;
  let maxElementIndexes: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxElement) {
      maxElementIndexes.push(i);
    }
    const maxElementCount = maxElementIndexes.length;
    if (maxElementCount >= k) {
      // Add the number of subarrays ending at the current index
      // where the maximum element appears at least k times.
      result += maxElementIndexes[maxElementCount - k] + 1;
    }
  }

  return result;
}
