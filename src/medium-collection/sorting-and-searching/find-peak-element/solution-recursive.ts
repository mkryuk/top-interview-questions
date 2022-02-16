export function findPeakElement(nums: number[]): number {
  return search(nums, 0, nums.length - 1);
}

function search(nums: number[], left: number, right: number): number {
  if (left === right) {
    return left;
  }
  let mid: number = Math.floor((left + right) / 2);
  if (nums[mid] > nums[mid + 1]) {
    return search(nums, left, mid);
  }
  return search(nums, mid + 1, right);
}
