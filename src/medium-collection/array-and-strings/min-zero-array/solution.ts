export function minZeroArray(nums: number[], queries: number[][]): number {
  const n = nums.length;
  let low = 0;
  let high = queries.length + 1;
  let result = -1;
  // check if nums is already a zero array.
  if (nums.every((num) => num === 0)) {
    return 0;
  }
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canTransform(mid, nums, queries)) {
      result = mid;
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

function canTransform(k: number, nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  for (let i = 0; i < k; i++) {
    const [l, r, v] = queries[i];
    diff[l] += v;
    if (r + 1 < n) {
      diff[r + 1] -= v;
    }
  }
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += diff[i];
    if (current < nums[i]) {
      return false;
    }
  }
  return true;
}
