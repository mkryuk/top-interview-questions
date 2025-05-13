export function findEvenNumbers(digits: number[]): number[] {
  const n = digits.length;
  const numSet: Set<number> = new Set();
  for (let i = 0; i < n; i++) {
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
        const num = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (num % 2 === 0) {
          numSet.add(num);
        }
      }
    }
  }
  const result = Array.from(numSet).sort((a, b) => a - b);
  return result;
}
