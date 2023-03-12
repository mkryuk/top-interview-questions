export function sortArrayByParity(nums: number[]): number[] {
  let oddIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    // we should find the first odd number first
    if (nums[i] % 2 === 1 && oddIndex === -1) {
      oddIndex = i;
    }
    // if we already found the odd number
    // and found the even number after it - swap them
    if (oddIndex !== -1 && nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[oddIndex];
      nums[oddIndex] = temp;
      oddIndex = oddIndex + 1;
    }
  }
  return nums;
}
