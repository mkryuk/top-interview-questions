// Sort solution
export function containsDuplicate(nums: number[]): boolean {
  nums.sort();
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === nums[index + 1]) {
      return true;
    }
  }
  return false;
}

// Set solution
// export function containsDuplicate(nums: number[]): boolean {
//   return new Set(nums).size !== nums.length;
// }
