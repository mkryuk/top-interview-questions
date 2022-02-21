export function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let num = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    } else {
      num = nums[i];
      count = 1;
    }
    if (count > Math.floor(nums.length / 2)) {
      return num;
    }
  }
  return num;
}
