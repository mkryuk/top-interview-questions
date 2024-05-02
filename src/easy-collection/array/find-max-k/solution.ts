export function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] > 0) {
      break;
    }
    const absLeft = Math.abs(nums[left]);
    if (absLeft === nums[right]) {
      return nums[right];
    } else if (absLeft < nums[right]) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}
