export function minimumOperations(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result += Math.min(num % 3, 3 - (num % 3));
  }
  return result;
}
