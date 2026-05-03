export function rotatedDigits(n: number): number {
  let result = 0;
  for (let value = 1; value <= n; value++) {
    if (isGoodNumber(value)) {
      result++;
    }
  }
  return result;
}

function isGoodNumber(value: number): boolean {
  let hasDifferentDigit = false;
  let current = value;
  while (current > 0) {
    const digit = current % 10;
    if (!isValidRotatedDigit(digit)) {
      return false;
    }
    if (isDifferentAfterRotation(digit)) {
      hasDifferentDigit = true;
    }
    current = Math.floor(current / 10);
  }
  return hasDifferentDigit;
}

function isValidRotatedDigit(digit: number): boolean {
  return digit === 0 || digit === 1 || digit === 2 || digit === 5 || digit === 6 || digit === 8 || digit === 9;
}

function isDifferentAfterRotation(digit: number): boolean {
  return digit === 2 || digit === 5 || digit === 6 || digit === 9;
}
