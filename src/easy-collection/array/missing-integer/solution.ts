export function missingInteger(nums: number[]): number {
  let prefixSum = nums[0];

  // find the longest sequential prefix
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      break;
    }
    prefixSum += nums[i];
  }

  const values = new Set(nums);
  let result = prefixSum;

  // find the first missing integer
  while (values.has(result)) {
    result++;
  }

  return result;
}
