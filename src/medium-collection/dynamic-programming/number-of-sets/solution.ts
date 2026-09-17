export function numberOfSets(n: number, k: number): number {
  const MOD = 1e9 + 7;
  let closed: number[] = new Array(k + 1).fill(0);
  let open: number[] = new Array(k + 1).fill(0);
  closed[0] = 1;

  for (let point = 0; point < n; point++) {
    const nextClosed: number[] = new Array(k + 1).fill(0);
    const nextOpen: number[] = new Array(k + 1).fill(0);
    for (let segments = 0; segments <= k; segments++) {
      // don't use this point
      nextClosed[segments] = (nextClosed[segments] + closed[segments]) % MOD;
      // keep the current segment open
      nextOpen[segments] = (nextOpen[segments] + open[segments]) % MOD;
      // close the current segment at this point
      nextClosed[segments] = (nextClosed[segments] + open[segments]) % MOD;
      if (segments < k) {
        // start a new segment at this point
        nextOpen[segments + 1] = (nextOpen[segments + 1] + closed[segments]) % MOD;
        // close the previous segment and start another
        // at the same point
        nextOpen[segments + 1] = (nextOpen[segments + 1] + open[segments]) % MOD;
      }
    }

    closed = nextClosed;
    open = nextOpen;
  }

  return closed[k];
}
