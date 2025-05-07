export function buildArray(nums: number[]): number[] {
  const n = nums.length;

  // encode both old and new values
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] + n * (nums[nums[i]] % n);
  }

  // extract new values
  for (let i = 0; i < n; i++) {
    nums[i] = Math.floor(nums[i] / n);
  }
  return nums;
}
