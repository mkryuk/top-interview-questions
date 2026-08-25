export function stoneGameVIII(stones: number[]): number {
  const n = stones.length;
  const prefix: number[] = new Array(n);
  prefix[0] = stones[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + stones[i];
  }

  let best = prefix[n - 1];
  for (let i = n - 2; i >= 1; i--) {
    best = Math.max(best, prefix[i] - best);
  }

  return best;
}
