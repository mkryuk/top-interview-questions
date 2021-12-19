export function isPowerOfThree(n: number): boolean {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
}
