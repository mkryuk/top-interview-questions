export function getSumAbsoluteDifferences(nums: number[]): number[] {
  let leftSum = 0;
  let totalSum = nums.reduce((prev, curr) => prev + curr, 0);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i - 1] ?? 0;
    let rightSum = totalSum - leftSum - nums[i];
    let leftDifference = nums[i] * i - leftSum;
    let rightDifference = rightSum - nums[i] * (nums.length - i - 1);
    let difference = leftDifference + rightDifference;
    result.push(difference);
  }
  return result;
}
