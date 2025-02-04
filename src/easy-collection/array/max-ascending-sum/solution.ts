export function maxAscendingSum(nums: number[]): number {
  const n = nums.length;
  let ascendingSum = nums[0];
  let result = ascendingSum;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      ascendingSum += nums[i];
      result = Math.max(result, ascendingSum);
    } else {
      ascendingSum = nums[i];
    }
  }
  return result;
}
