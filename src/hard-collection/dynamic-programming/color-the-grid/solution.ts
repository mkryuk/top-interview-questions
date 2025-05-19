export function colorTheGrid(m: number, n: number): number {
  const MOD = 1e9 + 7;

  // generate all valid columns (no two same‐color cells vertically)
  const patterns: number[][] = [];
  const totalMasks = 3 ** m;
  for (let mask = 0; mask < totalMasks; mask++) {
    const col: number[] = [];
    let x = mask;
    let ok = true;
    for (let i = 0; i < m; i++) {
      const c = x % 3;
      if (i > 0 && col[i - 1] === c) {
        ok = false;
        break;
      }
      col.push(c);
      x = Math.floor(x / 3);
    }
    if (ok) {
      patterns.push(col);
    }
  }

  const P = patterns.length;

  // precompute which columns can follow which (no same color in any row)
  const adj: number[][] = Array.from({ length: P }, () => []);
  for (let i = 0; i < P; i++) {
    for (let j = 0; j < P; j++) {
      let comp = true;
      for (let k = 0; k < m; k++) {
        if (patterns[i][k] === patterns[j][k]) {
          comp = false;
          break;
        }
      }
      if (comp) {
        adj[i].push(j);
      }
    }
  }

  // DP across n columns: dp[i] = number of ways to paint up to current
  // column ending in pattern i.
  let dp = new Array<number>(P).fill(1); // base case: first column can be any pattern

  for (let col = 1; col < n; col++) {
    const next = new Array<number>(P).fill(0);
    for (let i = 0; i < P; i++) {
      const val = dp[i];
      if (!val) {
        continue;
      }
      for (const j of adj[i]) {
        next[j] = (next[j] + val) % MOD;
      }
    }
    dp = next;
  }

  // sum over all ending patterns
  return dp.reduce((sum, v) => (sum + v) % MOD, 0);
}
