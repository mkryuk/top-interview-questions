export function longestSubsequence(nums: number[]): number {
  let totalXor = 0;
  let hasNonZero = false;

  for (const num of nums) {
    totalXor ^= num;
    if (num !== 0) {
      hasNonZero = true;
    }
  }

  // the entire array is valid
  if (totalXor !== 0) {
    return nums.length;
  }

  // removing any non-zero number makes xor non-zero
  if (hasNonZero) {
    return nums.length - 1;
  }

  // all numbers are zero
  return 0;
}
