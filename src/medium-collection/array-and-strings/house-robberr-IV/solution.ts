export function minCapability(nums: number[], k: number): number {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let low = min;
  let high = max;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canRob(mid, nums, k)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function canRob(capacity: number, nums: number[], k: number): boolean {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] <= capacity) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }
  return count >= k;
}
