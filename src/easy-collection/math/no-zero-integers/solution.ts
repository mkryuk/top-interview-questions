export function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    const a = i;
    const b = n - i;
    if (!a.toString().includes("0") && !b.toString().includes("0")) {
      return [a, b];
    }
  }
  return [];
}
