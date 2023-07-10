export function canPartitionKSubsets(nums: number[], k: number): boolean {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k !== 0) {
    return false; // If total sum of array is not divisible by k, no equal partitioning is possible.
  }

  let target = sum / k; // The sum of numbers in each subset.
  nums.sort((a, b) => b - a); // Sorting in decreasing order will make the algorithm faster.

  if (nums[0] > target) {
    return false; // The largest number is greater than the target sum. Hence, partitioning is not possible.
  }

  let subsets = new Array(k).fill(0); // Initialize k subsets with sum 0.
  return partition(0, nums, subsets, target);
}

function partition(
  index: number,
  nums: number[],
  subsets: number[],
  target: number,
): boolean {
  if (index === nums.length) {
    // If we reach the end of the array, check if all subsets are equal to target.
    return subsets.every((subset) => subset === target);
  }

  for (let i = 0; i < subsets.length; i++) {
    if (subsets[i] + nums[index] <= target) {
      // Add the current number to the current subset.
      subsets[i] += nums[index];

      if (partition(index + 1, nums, subsets, target)) {
        // Continue to add to next subsets.
        return true;
      }

      subsets[i] -= nums[index]; // If adding the current number to the subset did not solve the problem, remove it.
    }

    // If the current subset is empty, we should not try the remaining empty subsets.
    // That's because we're just doing the same thing but in a different order (for example: subset[0] = nums[0] and subset[1] = nums[1] is the same as subset[1] = nums[0] and subset[0] = nums[1]).
    // Therefore, we can make a decision here to only choose the first empty subset.
    if (subsets[i] === 0) {
      break;
    }
  }

  return false;
}
