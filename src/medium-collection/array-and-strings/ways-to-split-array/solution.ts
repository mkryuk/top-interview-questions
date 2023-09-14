export function waysToSplitArray(nums: number[]): number {
  let result = 0;
  let leftSum = new Array(nums.length);
  let rightSum = new Array(nums.length);
  leftSum[0] = nums[0];
  rightSum[nums.length - 1] = 0;
  for (let i = 1, j = nums.length - 2; i < nums.length; i++, j--) {
    leftSum[i] = leftSum[i - 1] + nums[i];
    rightSum[j] = rightSum[j + 1] + nums[j + 1];
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (leftSum[i] >= rightSum[i]) {
      result++;
    }
  }
  return result;
}
