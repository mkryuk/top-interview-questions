export function minElement(nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    result = Math.min(result, sumNumber(num));
  }
  return result;
}

function sumNumber(num: number): number {
  let result = 0;
  while (num > 0) {
    result += Math.trunc(num % 10);
    num /= 10;
  }
  return result;
}
