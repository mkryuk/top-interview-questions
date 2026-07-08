export function sumAndMultiply(n: number): number {
  let digits = 0;
  let sum = 0;
  let multiplier = 1;
  while (n > 0) {
    const digit = n % 10;
    n = Math.trunc(n / 10);
    if (digit === 0) {
      continue;
    }
    digits = digit * multiplier + digits;
    sum += digit;
    multiplier *= 10;
  }
  return digits * sum;
}
