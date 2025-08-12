export function productQueries(n: number, queries: number[][]): number[] {
  const MOD = 1e9 + 7;

  const bins: number[] = [];
  let rep = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      bins.push(rep);
    }
    n = Math.floor(n / 2);
    rep *= 2;
  }

  const result: number[] = [];
  for (const [start, end] of queries) {
    let cur = 1;
    for (let i = start; i <= end; i++) {
      cur = (cur * bins[i]) % MOD;
    }
    result.push(cur);
  }
  return result;
}
