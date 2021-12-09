export function climbStairs(n: number): number {
  return makeStep(0, n);
}

function makeStep(step: number, n: number): number {
  if (step > n) {
    return 0;
  }
  if (step === n) {
    return 1;
  }
  return makeStep(step + 1, n) + makeStep(step + 2, n);
}
