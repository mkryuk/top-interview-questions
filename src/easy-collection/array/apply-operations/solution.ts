export function applyOperations(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  const result = new Array(n).fill(0);
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      result[j++] = nums[i];
    }
  }
  return result;
}
