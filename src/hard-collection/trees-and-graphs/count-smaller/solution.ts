export function countSmaller(nums: number[]): number[] {
  let result: number[] = [];
  result.unshift(0);
  for (let i = nums.length - 2; i >= 0; i--) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.unshift(count);
  }
  return result;
}
