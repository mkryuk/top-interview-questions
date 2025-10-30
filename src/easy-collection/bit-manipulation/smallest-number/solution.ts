export function smallestNumber(n: number): number {
  let bitCount = 0;
  while (n > 0) {
    bitCount += 1;
    n >>= 1;
  }
  return Math.pow(2, bitCount) - 1;
}
