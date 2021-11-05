export function plusOne(digits: number[]): number[] {
  let lastIndex = digits.length - 1;
  while (digits[lastIndex] === 9) {
    digits[lastIndex] = 0;
    if (lastIndex !== 0) {
      lastIndex--;
    } else if (lastIndex === 0) {
      digits.unshift(0);
    }
  }
  digits[lastIndex]++;
  return digits;
}
