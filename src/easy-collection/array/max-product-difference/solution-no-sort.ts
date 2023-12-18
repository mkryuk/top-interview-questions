export function maxProductDifference(nums: number[]): number {
  let max = 0;
  let secondMax = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;
  for (const number of nums) {
    if (number > max) {
      secondMax = max;
      max = number;
    } else {
      secondMax = Math.max(secondMax, number);
    }
    if (number < min) {
      secondMin = min;
      min = number;
    } else {
      secondMin = Math.min(secondMin, number);
    }
  }
  return max * secondMax - min * secondMin;
}
