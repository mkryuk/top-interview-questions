export function separateDigits(nums: number[]): number[] {
  const result: number[] = [];
  for (let num of nums) {
    let digits: number[] = [];
    while (num > 0) {
      const digit = Math.abs(num % 10);
      digits.push(digit);
      num = Math.trunc(num / 10);
    }
    while (digits.length > 0) {
      result.push(digits.pop()!);
    }
  }
  return result;
}
