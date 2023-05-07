function numSubseq(nums: number[], target: number): number {
  // Sort the input array nums in ascending order
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  const MOD = 1e9 + 7;
  let result = 0;

  // Create an array pow to store precomputed powers of 2
  const pow = new Array(nums.length);
  pow[0] = 1;

  // Precompute powers of 2 modulo MOD for all positions in the input array nums
  for (let i = 1; i < nums.length; i++) {
    pow[i] = (pow[i - 1] * 2) % MOD;
  }

  // Iterate through the sorted array using the two-pointer approach
  while (left <= right) {
    // If the sum of the values at the left and right pointers is less than or equal to target
    if (nums[left] + nums[right] <= target) {
      // Add the precomputed power of 2 at the position right - left to the result res
      result = (result + pow[right - left]) % MOD;

      // Increment the left pointer
      left++;
    } else {
      // If the sum is greater than target, decrement the right pointer
      right--;
    }
  }

  return result;
}
