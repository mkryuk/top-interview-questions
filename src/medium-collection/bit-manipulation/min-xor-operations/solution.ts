export function minOperations(nums: number[], k: number): number {
  // Calculate the XOR of all elements in the array combined with k.
  let xorResult = nums.reduce((acc, num) => acc ^ num, k);
  let result = 0;
  // Loop through all bits of xorResult until all bits are processed.
  while (xorResult > 0) {
    // Increment the result for each set bit (bit that is 1).
    if ((xorResult & 1) === 1) {
      result++;
    }
    xorResult >>= 1;
  }
  return result;
}
