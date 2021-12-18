export function isPowerOfThree(n: number): boolean {
  if (n === 1) {
    return true;
  }
  while (n > 1) {
    n = n / 3;
    if (n === 1) {
      return true;
    }
  }
  return false;
}
