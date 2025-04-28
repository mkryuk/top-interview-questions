export function countSubarrays(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const second = nums[i + 1];
    const third = nums[i + 2];
    if (first + third === second / 2) {
      result++;
    }
  }
  return result;
}
