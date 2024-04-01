export function countSubarrays(
  nums: number[],
  minK: number,
  maxK: number,
): number {
  let count = 0;
  let lastMinK = -1;
  let lastMaxK = -1;
  let lastInvalid = -1;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === minK) {
      lastMinK = i;
    }
    if (nums[i] === maxK) {
      lastMaxK = i;
    }
    if (nums[i] < minK || nums[i] > maxK) {
      lastInvalid = i;
    }
    // If both minK and maxK have been encountered and there's no invalid element in between,
    // add to count the subarrays ending at i, starting after the last invalid position
    if (lastMinK > lastInvalid && lastMaxK > lastInvalid) {
      count += Math.min(lastMinK, lastMaxK) - lastInvalid;
    }
  }

  return count;
}
