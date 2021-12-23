export function reverseBits(n: number): number {
  let result = 0;
  result = n & 1;
  for (let i = 0; i < 31; i++) {
    result <<= 1;
    n >>= 1;
    const bit = n & 1;
    result |= bit;
  }
  // return unsigned number
  return result >>> 0;
}
