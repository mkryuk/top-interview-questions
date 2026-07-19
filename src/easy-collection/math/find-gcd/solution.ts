export function findGCD(nums: number[]): number {
  let min = Infinity;
  let max = -Infinity;
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  while (min > 0) {
    let remainder = max % min;
    max = min;
    min = remainder;
  }
  return max;
}
