export function differenceOfSums(n: number, m: number): number {
  const totalSum = ((1 + n) * n) / 2;
  const k = Math.floor(n / m);
  // first (m) + last (m * k) * count (k) / 2
  const sumDivisible = Math.floor(((m + m * k) * k) / 2);
  const sumNotDivisible = totalSum - sumDivisible;
  return sumNotDivisible - sumDivisible;
}
