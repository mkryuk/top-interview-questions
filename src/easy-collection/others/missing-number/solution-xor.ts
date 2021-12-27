export function missingNumber(nums: number[]): number {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    // Because we know that nums contains n numbers
    // and that it is missing exactly one number on the range [0..n-1],
    // we know that n definitely replaces the missing number in nums.
    // Therefore, if we initialize an integer to n
    // and XOR it with every index and value,
    // we will be left with the missing number.
    result ^= i ^ nums[i];
  }
  return result;
}
