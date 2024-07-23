export function bitwiseComplement(n: number): number {
  if (n === 0) {
    return 1;
  }

  let bitLength = 0;
  let temp = n;
  while (temp > 0) {
    bitLength++;
    temp >>= 1;
  }
  return n ^ (Math.pow(2, bitLength) - 1);
}
