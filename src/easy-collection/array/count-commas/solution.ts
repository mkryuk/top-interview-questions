export function countCommas(n: number): number {
  if (n < 1000) {
    return 0;
  }

  return n - 999;
}
