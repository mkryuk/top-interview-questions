export function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (countPairs(nums, mid) >= p) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function countPairs(nums: number[], threshold: number): number {
  let count = 0;
  let index = 0;
  while (index < nums.length - 1) {
    if (nums[index + 1] - nums[index] <= threshold) {
      count++;
      index++;
    }
    index++;
  }
  return count;
}
