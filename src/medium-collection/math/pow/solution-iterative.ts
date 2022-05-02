export function myPow(x: number, n: number): number {
  let N = n;
  if (N < 0) {
    N = -N;
    x = 1 / x;
  }
  let result = 1;
  let curProd = x;
  for (let i = N; i > 0; i = Math.trunc(i / 2)) {
    if (i % 2 === 1) {
      result = result * curProd;
    }
    curProd *= curProd;
  }
  return result;
}
