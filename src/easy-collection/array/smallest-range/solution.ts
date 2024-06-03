export function smallestRangeI(nums: number[], k: number): number {
  let min = Infinity;
  let max = -Infinity;
  for (const num of nums) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  min += k;
  max -= k;
  return Math.max(0, max - min);
}
