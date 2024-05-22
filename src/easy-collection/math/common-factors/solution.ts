export function commonFactors(a: number, b: number): number {
  let result = 0;
  let minNumber = Math.min(a, b);
  for (let i = 1; i <= minNumber; i++) {
    if (a % i === 0 && b % i === 0) {
      result++;
    }
  }
  return result;
}
