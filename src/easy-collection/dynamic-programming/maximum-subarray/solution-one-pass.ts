export function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currSum = maxSum;
  for (let i = 1; i < nums.length; i++) {
    const tempSum = currSum + nums[i];

    if (nums[i] > tempSum) {
      currSum = nums[i];
    } else {
      currSum = tempSum;
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}
