export function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i <= nums.length; i++) {
    const index = getIndex(i, nums);
    let greaterNumbers = n - index;
    if (greaterNumbers === i) {
      return i;
    }
  }
  return -1;
}

function getIndex(n: number, nums: number[]): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
