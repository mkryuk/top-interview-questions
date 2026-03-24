export function maxProductPath(grid: number[][]): number {
  // modulo constant
  const MOD = BigInt(1e9 + 7);

  const m = grid.length;
  const n = grid[0].length;

  // max and min product up to each cell
  const maxDp: bigint[][] = Array.from({ length: m }, () => Array<bigint>(n).fill(BigInt(0)));
  const minDp: bigint[][] = Array.from({ length: m }, () => Array<bigint>(n).fill(BigInt(0)));

  // initialize start cell
  const start = BigInt(grid[0][0]);
  maxDp[0][0] = start;
  minDp[0][0] = start;

  // fill first row
  for (let j = 1; j < n; j++) {
    const value = BigInt(grid[0][j]);
    maxDp[0][j] = maxDp[0][j - 1] * value;
    minDp[0][j] = minDp[0][j - 1] * value;
  }

  // fill first column
  for (let i = 1; i < m; i++) {
    const value = BigInt(grid[i][0]);
    maxDp[i][0] = maxDp[i - 1][0] * value;
    minDp[i][0] = minDp[i - 1][0] * value;
  }

  // fill the rest of the table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const value = BigInt(grid[i][j]);

      const candidates: bigint[] = [
        maxDp[i - 1][j] * value,
        minDp[i - 1][j] * value,
        maxDp[i][j - 1] * value,
        minDp[i][j - 1] * value,
      ];

      let currentMax = candidates[0];
      let currentMin = candidates[0];

      for (let k = 1; k < candidates.length; k++) {
        if (candidates[k] > currentMax) {
          currentMax = candidates[k];
        }
        if (candidates[k] < currentMin) {
          currentMin = candidates[k];
        }
      }

      maxDp[i][j] = currentMax;
      minDp[i][j] = currentMin;
    }
  }

  const result = maxDp[m - 1][n - 1];

  if (result < BigInt(0)) {
    return -1;
  }

  return Number(result % MOD);
}
