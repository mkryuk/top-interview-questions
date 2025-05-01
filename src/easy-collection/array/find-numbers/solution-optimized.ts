export function findNumbers(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    if ((num >= 10 && num <= 99) || (num >= 1000 && num <= 9999) || num === 100000) {
      result++;
    }
  }
  return result;
}
