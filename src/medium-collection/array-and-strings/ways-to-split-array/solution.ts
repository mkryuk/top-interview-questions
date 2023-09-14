export function waysToSplitArray(nums: number[]): number {
  let result = 0;
  const n = nums.length;
  let totalSum = nums.reduce((sum, num) => sum + num, 0);
  const halfSum = totalSum / 2;
  let leftSum = 0;
  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    totalSum -= nums[i];
    if (leftSum >= totalSum) {
      result++;
    }
  }
  return result;
}
