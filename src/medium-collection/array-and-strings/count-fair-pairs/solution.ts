export function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const left = lower - nums[i];
    const right = upper - nums[i];
    const l = lowerBound(nums, left, i + 1, n - 1);
    const r = upperBound(nums, right, i + 1, n - 1) - 1;
    if (l <= r) {
      result += r - l + 1;
    }
  }
  return result;
}

function lowerBound(nums: number[], target: number, left: number, right: number) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function upperBound(nums: number[], target: number, left: number, right: number) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
