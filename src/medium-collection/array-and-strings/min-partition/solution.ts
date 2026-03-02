export function minPartitions(n: string): number {
  let maxDigit = 0;

  for (let i = 0; i < n.length; i++) {
    // digits are '0'..'9', so subtract '0'
    const digit = n.charCodeAt(i) - 48;

    if (digit > maxDigit) {
      maxDigit = digit;
    }

    // early exit: cannot exceed 9
    if (maxDigit === 9) {
      return 9;
    }
  }

  return maxDigit;
}
