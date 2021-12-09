export function climbStairs(n: number): number {
  return makeStep(0, n, []);
}

function makeStep(step: number, n: number, memo: number[]): number {
  if (step > n) {
    return 0;
  }
  if (step === n) {
    return 1;
  }
  // we calculate every step only once
  if (memo[step] === undefined) {
    memo[step] = makeStep(step + 1, n, memo) + makeStep(step + 2, n, memo);
  }
  return memo[step];
}
