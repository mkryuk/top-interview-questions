export function hammingWeight(n: number): number {
  let result = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if (n & mask) {
      result++;
    }
    mask <<= 1;
  }
  return result;
}
