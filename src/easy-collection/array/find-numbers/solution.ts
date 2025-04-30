export function findNumbers(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    if (countDigits(num) % 2 === 0) {
      result++;
    }
  }
  return result;
}

function countDigits(num: number): number {
  let result = 1;
  while (num >= 10) {
    result++;
    num = Math.trunc(num / 10);
  }
  return result;
}
