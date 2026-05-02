export function maxRotateFunction(nums: number[]): number {
  const n = nums.length;
  let totalSum = 0;
  let currentValue = 0;

  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
    currentValue += i * nums[i];
  }

  let result = currentValue;
  for (let k = 1; k < n; k++) {
    const movedValue = nums[n - k];
    currentValue = currentValue + totalSum - n * movedValue;
    if (currentValue > result) {
      result = currentValue;
    }
  }

  return result;
}
