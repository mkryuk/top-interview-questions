export function divideArray(nums: number[], k: number): number[][] {
  // sort the nums array to make it easier to find elements with differences ≤ k
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i += 3) {
    // check if the difference between the max and min in the current sub-array of size 3 is ≤ k
    if (nums[i + 2] - nums[i] <= k) {
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      // if it's not possible to satisfy the condition, return an empty array
      return [];
    }
  }

  return result;
}
