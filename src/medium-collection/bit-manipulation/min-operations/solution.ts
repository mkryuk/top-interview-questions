export function minOperations(nums: number[]): number {
  let result = 0;
  const n = nums.length;
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < i + 3; j++) {
        nums[j] ^= 1;
      }
      result++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      return -1;
    }
  }
  return result;
}
