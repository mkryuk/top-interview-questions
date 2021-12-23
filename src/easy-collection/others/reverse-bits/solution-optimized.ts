export function reverseBits(n: number): number {
  let result = 0,
    power = 31;
  while (n !== 0) {
    result += (n & 1) << power;
    n >>>= 1;
    power -= 1;
  }
  // return unsigned number
  return result >>> 0;
}
