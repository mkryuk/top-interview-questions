export function hammingDistance(x: number, y: number): number {
  let result = 0;
  let xor = x ^ y;
  while (xor !== 0) {
    xor &= xor - 1;
    result++;
  }
  return result;
}
