export function countPartitions(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;
    if ((rightSum - leftSum) % 2 === 0) {
      result++;
    }
  }

  return result;
}
