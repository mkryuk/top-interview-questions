export function resultsArray(nums: number[], k: number): number[] {
  if (k === 1) {
    return nums;
  }
  const n = nums.length;
  const result = new Array(n - k + 1).fill(-1);
  let count = 1;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count >= k) {
      result[i - k + 2] = nums[i + 1];
    }
  }
  return result;
}
