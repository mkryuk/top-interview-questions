export function getSumAbsoluteDifferences(nums: number[]): number[] {
  let leftSum = 0;
  let totalSum = nums.reduce((prev, curr) => prev + curr, 0);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    let leftDifference = nums[i] * i - leftSum;
    let rightDifference = rightSum - nums[i] * (nums.length - i - 1);
    let difference = leftDifference + rightDifference;
    leftSum += nums[i];
    result.push(difference);
  }
  return result;
}
