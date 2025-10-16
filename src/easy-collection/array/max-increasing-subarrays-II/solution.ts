export function maxIncreasingSubarrays(nums: number[]): number {
  // precompute inc[i] = length of the longest strictly increasing subarray starting at i
  const n: number = nums.length;
  const inc: number[] = new Array(n).fill(1);

  // fill from right to left
  for (let i = n - 2; i >= 0; i--) {
    // if current < next, we can extend the run
    if (nums[i] < nums[i + 1]) {
      inc[i] = inc[i + 1] + 1;
    } else {
      inc[i] = 1;
    }
  }

  // binary search the maximum feasible k in [0, floor(n/2)]
  let lo: number = 0;
  let hi: number = Math.floor(n / 2);

  while (lo < hi) {
    // use upper mid to prevent infinite loop: try to push k upward
    const mid: number = Math.floor((lo + hi + 1) / 2);

    if (isIncreasing(nums, inc, mid)) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }

  return lo;
}

function isIncreasing(nums: number[], inc: number[], k: number): boolean {
  const n: number = nums.length;

  // need two blocks of size k placed back-to-back: [i .. i+k-1] and [i+k .. i+2k-1]
  for (let i = 0; i + 2 * k <= n; i++) {
    // first block must have inc[i] >= k
    if (inc[i] >= k) {
      // second block starts at i+k and must have inc[i+k] >= k
      if (inc[i + k] >= k) {
        return true;
      }
    }
  }

  return false;
}
