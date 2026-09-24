export function minOperations(nums: number[], x: number): number {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const target = totalSum - x;

  if (target < 0) {
    return -1;
  }

  if (target === 0) {
    return nums.length;
  }

  let left = 0;
  let currentSum = 0;
  let maxLength = -1;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // shrink the window until its sum is <= target
    while (currentSum > target && left <= right) {
      currentSum -= nums[left];

      left++;
    }

    // found a subarray that we can keep
    if (currentSum === target) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  if (maxLength === -1) {
    return -1;
  }

  return nums.length - maxLength;
}
