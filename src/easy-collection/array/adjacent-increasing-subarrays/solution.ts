export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  const n = nums.length;
  if (k === 1) {
    return true;
  }
  const increasing = new Array(n).fill(false);
  let strike = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      strike++;
    } else {
      strike = 1;
    }
    if (i >= k - 1) {
      const start = i - k + 1;
      if (strike >= k) {
        increasing[start] = true;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (increasing[i] && increasing[i + k]) {
      return true;
    }
  }
  return false;
}
