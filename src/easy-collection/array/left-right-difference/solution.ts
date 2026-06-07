export function leftRightDifference(nums: number[]): number[] {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  const result: number[] = [];

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    result.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return result;
}
