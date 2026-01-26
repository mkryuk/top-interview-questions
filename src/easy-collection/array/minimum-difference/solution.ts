export function minimumDifference(nums: number[], k: number): number {
  // if we pick 0 or 1 student, difference is always 0
  if (k <= 1) {
    return 0;
  }

  // sort scores to make best k-set always a contiguous window
  nums.sort((a, b) => a - b);

  let result: number = Number.MAX_SAFE_INTEGER;

  // slide a window of size k and minimize (max - min) within the window
  for (let i: number = 0; i + k - 1 < nums.length; i++) {
    const diff: number = nums[i + k - 1] - nums[i];

    if (diff < result) {
      result = diff;
    }
  }

  return result;
}
