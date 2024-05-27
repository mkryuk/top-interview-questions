export function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i <= nums.length; i++) {
    // how many elements to the right
    let count = n - i;
    if (nums[i] >= count) {
      // check if we are at the start of the array
      // or if the previous element is less than count
      if (i === 0 || nums[i - 1] < count) {
        return count;
      }
    }
  }
  return -1;
}
