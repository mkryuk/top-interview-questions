export function sortJumbled(mapping: number[], nums: number[]): number[] {
  let mapped: { original: number; mapped: number }[] = nums.map((n) => ({
    original: n,
    mapped: transformNumber(n, mapping),
  }));
  return mapped.sort((a, b) => a.mapped - b.mapped).map((n) => n.original);
}

function transformNumber(num: number, mapping: number[]): number {
  if (num === 0) {
    return mapping[0];
  }
  let result = 0;
  let numCount = 0;
  while (num > 0) {
    const digit = num % 10;
    result = mapping[digit] * Math.pow(10, numCount) + result;
    num = Math.trunc(num / 10);
    numCount++;
  }
  return result;
}
