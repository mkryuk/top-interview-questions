export function sortPermutation(nums: number[]): number {
  let k = -1;
  let hasMisplaced = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      if (!hasMisplaced) {
        k = nums[i];
        hasMisplaced = true;
      } else {
        k &= nums[i];
      }
    }
  }

  return hasMisplaced ? k : 0;
}
