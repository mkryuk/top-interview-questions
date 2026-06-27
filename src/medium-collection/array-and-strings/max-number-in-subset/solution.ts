export function maximumLength(nums: number[]): number {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }
  let result = 1;
  const ones = freq.get(1) ?? 0;
  if (ones > 0) {
    // for 1, every power is still 1, so we can use the largest odd count
    result = Math.max(result, ones % 2 === 1 ? ones : ones - 1);
  }

  for (const x of freq.keys()) {
    if (x === 1) {
      continue;
    }
    let current = x;
    let length = 0;
    while (freq.has(current)) {
      const count = freq.get(current)!;
      if (count >= 2) {
        // use one on the left side and one on the right side
        length += 2;
        // values are limited to 1e9, no need to continue after that
        if (current > Math.sqrt(1_000_000_000)) {
          break;
        }
        current = current * current;
      } else {
        // this value can only be the center
        length += 1;
        break;
      }
    }

    // valid pattern length must be odd
    if (length % 2 === 0) {
      length--;
    }
    result = Math.max(result, length);
  }
  return result;
}
