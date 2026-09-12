export function totalNumbers(digits: number[]): number {
  const numbers = new Set<number>();
  const n = digits.length;

  for (let i = 0; i < n; i++) {
    // hundreds digit cannot be zero
    if (digits[i] === 0) {
      continue;
    }

    for (let j = 0; j < n; j++) {
      if (j === i) {
        continue;
      }

      for (let k = 0; k < n; k++) {
        if (k === i || k === j) {
          continue;
        }

        // last digit must be even
        if (digits[k] % 2 !== 0) {
          continue;
        }

        const number = digits[i] * 100 + digits[j] * 10 + digits[k];
        numbers.add(number);
      }
    }
  }

  return numbers.size;
}
