export function hammingWeight(n: number): number {
  let result = 0;
  while (n !== 0) {
    // for any number n,
    // doing a bit-wise AND of n and n-1
    // flips the least-significant 1-bit in n to 0
    n &= n - 1;
    result++;
  }
  return result;
}
