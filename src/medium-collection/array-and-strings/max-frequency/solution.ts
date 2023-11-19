export function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  // Total sum of elements in the current window
  let totalSum = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    totalSum += nums[right];

    // Check if the current window is valid
    while (nums[right] * (right - left + 1) - totalSum > k) {
      // If not, shrink the window from the left
      totalSum -= nums[left];
      left++;
    }

    // Update the result with the maximum size of the valid window
    result = Math.max(result, right - left + 1);
  }

  return result;
}
