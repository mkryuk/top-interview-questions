export function reductionOperations(nums: number[]): number {
  let result = 0;
  nums.sort((a, b) => a - b);
  // Start index of the current group of equal elements
  let left = 0;
  let n = nums.length;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[left]) {
      continue;
    }

    // If the current element is different (i.e., a new larger number)
    // Add the count of elements to the right of the current element, which is n - i.
    result += n - i;

    // Update the left pointer for the next group of identical elements
    left = i;
  }
  return result;
}
