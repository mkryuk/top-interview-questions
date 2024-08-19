export function nthUglyNumber(n: number): number {
  let uglyNumbers = new Array(n);
  uglyNumbers[0] = 1;
  let nextUgly2 = 2;
  let nextUgly3 = 3;
  let nextUgly5 = 5;
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  for (let i = 1; i < n; i++) {
    const nextUgly = Math.min(nextUgly2, nextUgly3, nextUgly5);
    uglyNumbers[i] = nextUgly;
    if (nextUgly === nextUgly2) {
      i2++;
      nextUgly2 = uglyNumbers[i2] * 2;
    }
    if (nextUgly === nextUgly3) {
      i3++;
      nextUgly3 = uglyNumbers[i3] * 3;
    }
    if (nextUgly === nextUgly5) {
      i5++;
      nextUgly5 = uglyNumbers[i5] * 5;
    }
  }
  return uglyNumbers[n - 1];
}
