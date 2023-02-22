// O(log n) solution

// The idea is to keep track of the middle index mid and compare nums[mid] with nums[mid + 1].
// If they are not equal, then the single element must be on the left side of the array (since every other element appears twice).
// Otherwise, the single element must be on the right side of the array.
// We can then update the left or right index accordingly and continue the binary search until we find the single element.
export function singleNonDuplicate(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid % 2 === 1) {
      mid--; // ensure even index
    }

    if (nums[mid] !== nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }

  return nums[left];
}
