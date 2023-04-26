export function addDigits(num: number): number {
  let result = 0;
  while (num > 0) {
    result += num % 10;
    num = Math.trunc(num / 10);
    if (num === 0 && result > 9) {
      num = result;
      result = 0;
    }
  }
  return result;
}
