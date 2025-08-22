export function isPowerOfFour(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  // check if n is a power of 2, only one bit set in binary representation
  // and ensure that bit is in an odd position
  return (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}
