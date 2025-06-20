export function partitionArray(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  // initially we have at least 1 subsequence
  let result = 1;
  let subseqMin = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] - subseqMin > k) {
      result++;
      subseqMin = nums[i];
    }
  }
  return result;
}
