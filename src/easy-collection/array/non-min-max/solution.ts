export function findNonMinOrMax(nums: number[]): number {
  let min = Infinity;
  let max = -Infinity;
  for (const num of nums) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }
  for (const num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }
  return -1;
}
