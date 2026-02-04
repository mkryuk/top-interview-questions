export function isTrionic(nums: number[]): boolean {
  const n: number = nums.length;

  let i: number = 0;

  // first strictly increasing: nums[0..p]
  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i += 1;
  }

  const p: number = i;

  // need at least one increase so that 0 < p
  if (p <= 0) {
    return false;
  }

  // strictly decreasing: nums[p..q]
  while (i + 1 < n && nums[i] > nums[i + 1]) {
    i += 1;
  }

  const q: number = i;

  // need at least one decrease so that p < q
  if (q <= p) {
    return false;
  }

  // need room for the last increasing segment, so q < n - 1
  if (q >= n - 1) {
    return false;
  }

  // last strictly increasing: nums[q..n-1]
  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i += 1;
  }

  // must reach the end
  return i === n - 1;
}
