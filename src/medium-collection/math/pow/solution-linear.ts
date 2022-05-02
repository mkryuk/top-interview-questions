export function myPow(x: number, n: number): number {
  let N = n;
  if (N < 0) {
    N = -N;
    x = 1 / x;
  }
  let result = 1;
  for (let i = 0; i < N; i++) {
    result *= x;
  }
  return result;
}
